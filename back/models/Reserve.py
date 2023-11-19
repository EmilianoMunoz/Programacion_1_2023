from database import db 
from datetime import datetime


class Reserve(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('user.id'))
    placeId = db.Column(db.Integer, db.ForeignKey('place.id'))
    startTime = db.Column(db.DateTime) 
    endTime = db.Column(db.DateTime)    
    totalCost = db.Column(db.Float)     
    status = db.Column(db.String(20))   

    def update_status(self):
        current_time = datetime.now()
        if current_time >= self.endTime:
            self.status = "finalizado"
            self.place.availability = True
        else:
            self.status = "en curso"

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
