from database import db 

class Place(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    parking = db.Column(db.String(250), nullable=False)
    availability = db.Column(db.Boolean, default=True)


    placeReserves = db.relationship("Reserve", backref='place')

    
    def __str__(self):
        return(
            f'id: {self.id}, '
            f'availabity: {self.availabity}, '
            f'parking: {self.parking}'
        )