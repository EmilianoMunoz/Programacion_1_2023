from flask_restful import Resource
from flask import request, jsonify
from models.User import User
from database import db

class UserList(Resource):
    
    def get(self):
        users = db.session.query(User).all()
        result = []
        for user in users:
            result.append({
                'id': user.id,
                'name': user.name,
                'email': user.email,
                'phone' : user.phone
            })
        response = jsonify(result)
        response.status_code = 200
        return response
