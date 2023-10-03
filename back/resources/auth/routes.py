from flask import jsonify, request, Blueprint
from database import db 
from models.User import User

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    emailDb = User.query.filter_by(email=email).first()
    role = emailDb.role
    if emailDb and emailDb.password == password:
        response = {'Mensaje': 'Inicio sesion correctamente'}
        return jsonify(role=role), 200
    else:
        response = {'Mensaje': 'Error'}
        return jsonify(response), 401
    


@auth.route('/register', methods=['POST'])
def register():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    phone = request.json['phone']
    role = '1'
    print(name, email, phone, password, role)

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        response = {'mensaje': 'El correo electrónico ya está registrado.'}
        return jsonify(response), 400

    user = User(name=name, email=email, password=password, phone=phone, role=role)
    db.session.add(user)
    db.session.commit()
    return jsonify(role=role), 200

    

