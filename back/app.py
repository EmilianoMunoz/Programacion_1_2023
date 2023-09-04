from flask import Flask, jsonify, request
from flask_cors import CORS
from database import db, FULL_URL_DB
from flask_migrate import Migrate
from resources.auth.routes import auth 
from models import User  

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate()
migrate.init_app(app, db)

app.register_blueprint(auth)


@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()

    new_user = User(
        name=data['name'],
        email=data['email'],
        phone=data['phone'],
        password=data['password']
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Usuario registrado correctamente'}), 201

if __name__ == '__main__':
    app.run(debug=True)
