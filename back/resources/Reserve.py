from flask_restful import Resource
from flask import request, jsonify
from models.User import User
from models.Place import Place
from models import ReserveModel
from database import db 

class ReservesList(Resource):
      
    def post(self):
        userId = request.json['userId']
        placeId = request.json['placeId']
        startTime = request.json['startTime']
        endTime = request.json['endTime']
        totalCost = request.json['totalCost']
        
        user = User.query.get(userId)
        place = Place.query.get(placeId)
        if place:
            place.availability = False
            db.session.commit()
        else:
            return jsonify({'message': 'Lugar no encontrado'}), 404

        reserve = ReserveModel()
        reserve.user = user
        reserve.place = place
        reserve.startTime = startTime
        reserve.endTime = endTime
        reserve.totalCost = totalCost
        reserve.status = "en curso" 

        db.session.add(reserve)
        db.session.commit()
        return jsonify({'mensaje': 'Reserva agregada con éxito.'})
    

    def get(self):
        reserves = db.session.query(ReserveModel).all()
        result = []
        for reserve in reserves:
            result.append({
                'id': reserve.id,
                'userId': reserve.user.id,
                'userName': reserve.user.name,
                'placeId': reserve.place.id,
                'placeName': reserve.place.parking,
                'startTime': reserve.startTime,
                'endTime': reserve.endTime,
                'totalCost': reserve.totalCost,
                'status': reserve.status
            })
        response = jsonify(result)
        response.status_code = 200
        return response

class Reserve(Resource):

    def get(self, id):
        user = User.query.get(id)
         
        
         
        reserves = ReserveModel.query.filter_by(user=user).all()

        result = []
        for reserve in reserves:
            place = Place.query.get(reserve.placeId)
            result.append({
                'id': reserve.id,
                'userId': user.id,
                'userName': user.name,
                'placeId': reserve.place.id,
                'placeName': reserve.place.parking,
                'startTime': reserve.startTime,
                'endTime': reserve.endTime,
                'totalCost': reserve.totalCost,
                'status': reserve.status
            })

        return jsonify(result)

