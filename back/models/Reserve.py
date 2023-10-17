from database import db 

class Reserve(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey('user.id'))
    placeId = db.Column(db.Integer, db.ForeignKey('place.id'))

    userReserve = db.relationship("User", backref='reserve')
    userPlace = db.relationship("Place", backref='reserve')
    
    def __str__(self):
        return(
            f'id: {self.id}, '
            f'userId: {self.userId}, '
            f'placeId: {self.placeId}, '

        )