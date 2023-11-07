from flask_restful import Resource, reqparse
from flask import request, jsonify
from models import UserModel
from database import db


class UserList(Resource):
    
    def get(self):
        users = db.session.query(UserModel).all()
        result = []
        for user in users:
            result.append({
                'id': user.id,
                'name': user.name,
                'email': user.email,
                'phone': user.phone
            })
        response = jsonify(result)
        response.status_code = 200
        return response

class User(Resource):
    
    def get(self, id):
        user = db.session.query(UserModel).filter_by(id=id).first()
        if user is None:
            response = jsonify({"message": "Usuario no encontrado"})
            response.status_code = 404
            return response
        user_data = {
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'phone': user.phone
        }
        response = jsonify(user_data)
        response.status_code = 200
        return response

    def put(self, id):
        
        pass

    def delete(self, id):
        
        pass
