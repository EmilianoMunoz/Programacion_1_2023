from flask_restful import Resource
from flask import request, jsonify
from models.Place import Place
from database import db

class PlaceList(Resource):
    
    def post(self):
        availabity = request.json.get('availabity')
        parking = request.json.get('parking')
        
        place = Place(availabity=availabity, parking=parking)

        db.session.add(place)
        db.session.commit()
        return jsonify({'mensaje' : 'Plaza agregada con éxito'})

    def get(self):
        places = db.session.query(Place).all()
        result = []
        for place in places:
            result.append({
                'id': place.id,
                'availabity': place.availabity,
                'parking': place.parking
            })
        response = jsonify(result)
        response.status_code = 200
        return response

    def delete(self, id):
        try:
            place = db.session.query(Place).get(id)
            if place:
                db.session.delete(place)
                db.session.commit()
                return jsonify({'mensaje' : 'Plaza eliminada con éxito'})
            else:
                return jsonify({'error': 'No se encontró la plaza con el ID proporcionado'}), 404
        except Exception as e:
            return jsonify({'error': 'Error al eliminar la plaza'}), 500
