from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from database import db, FULL_URL_DB
from flask_migrate import Migrate
from resources.auth.routes import auth
from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime
from models import UserModel
from models import ReserveModel
from resources.Place import PlaceList
from resources.User import UserList, User
from resources.Reserve import ReservesList, Reserve
from models import PlaceModel

app = Flask(__name__)
api = Api(app)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate()
migrate.init_app(app, db)

app.register_blueprint(auth)

api.add_resource(PlaceList, '/parkingform', endpoint='parkingform')
api.add_resource(PlaceList, '/parkingform/<int:id>', '/parkingform/<int:id>/', endpoint='parkingform_id')

api.add_resource(UserList, '/userlist')
api.add_resource(User, '/user/<int:id>', '/user/<int:id>/', endpoint='user_id')

@app.route('/reserves', methods=['OPTIONS'])
def handle_options():
    return '', 204

api.add_resource(ReservesList, '/reserveslist', endpoint='reserveslist')
api.add_resource(Reserve, '/reserves/<int:id>', '/reserves/<int:id>/', endpoint='reserve_id')

scheduler = BackgroundScheduler()

def update_reservation_statuses():
    with app.app_context():

        reserves = ReserveModel.query.all()
        current_time = datetime.now()
        for reserve in reserves:
            if current_time >= reserve.endTime:
                reserve.status = "finalizado"
            else:
                reserve.status = "en curso"
            db.session.commit()


def reset_availability():
    current_time = datetime.now()
    places_to_reset = PlaceModel.query.filter(PlaceModel.availability == False, PlaceModel.reservations.any(ReserveModel.endTime <= current_time)).all()

    for place in places_to_reset:
        place.availability = True
scheduler.add_job(reset_availability, 'interval', minutes=1)

scheduler.add_job(update_reservation_statuses, 'interval', minutes=1)
scheduler.start()

@app.route('/parkingform', methods=['OPTIONS'])
def handle_parkingform_options():
    return '', 204

@app.route('/parkingform/<int:id>', methods=['OPTIONS'])
def handle_parkingform_options_for_place(id):
    return '', 204

@app.route('/user', methods=['OPTIONS'])
def handle_user_options():
    return '', 204

@app.route('/user/<int:id>', methods=['OPTIONS'])
def handle_user_options_for_user(id):
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
