from database import db 

class Reserve(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('user.id'))
    placeId = db.Column(db.Integer, db.ForeignKey('place.id'))
    startTime = db.Column(db.DateTime)  # Fecha y hora de inicio
    endTime = db.Column(db.DateTime)    # Fecha y hora de finalización
    totalCost = db.Column(db.Float)     # Precio Total
    status = db.Column(db.String(20))   # Estado de la reserva

    userReserve = db.relationship("User", backref='reserve')
    userPlace = db.relationship("Place", backref='reserve')

    def __str__(self):
        return (
            f'id: {self.id}, '
            f'userId: {self.userId}, '
            f'placeId: {self.placeId}, '
            f'startTime: {self.startTime}, '
            f'endTime: {self.endTime}, '
            f'totalCost: {self.totalCost}, '
            f'status: {self.status}'
        )
