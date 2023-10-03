from database import db 

class Parking(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(250))
    places = db.Column(db.Integer)

    
    def __str__(self):
        return(
            f'id: {self.id}, '
            f'name: {self.name}, '
            f'places: {self.places}, '