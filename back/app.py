from flask import Flask, jsonify, request
from flask_restful import Api
from flask_cors import CORS
from database import db, FULL_URL_DB
from flask_migrate import Migrate
from resources.auth.routes import auth 
from models import User  
from resources.Place import PlaceList

app = Flask(__name__)
api = Api(app)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate()
migrate.init_app(app, db)

app.register_blueprint(auth)


api.add_resource(PlaceList, '/parkingform')
@app.route('/parkingform', methods=['OPTIONS'])
def handle_options():
    return '', 204


if __name__ == '__main__':
    app.run(debug=True)
