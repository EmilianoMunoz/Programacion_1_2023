from flask import Flask, jsonify, request
from flask_restful import Api
from flask_cors import CORS
from database import db, FULL_URL_DB
from flask_migrate import Migrate
from resources.auth.routes import auth 
from models import User  
from resources.Place import PlaceList
from resources.User import UserList

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
api.add_resource(UserList, '/userlist/<int:id>', '/user/<int:id>/', endpoint='user_id')

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
