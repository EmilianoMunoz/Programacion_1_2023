from database import db 

class Place(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    availabity = db.Column(db.Boolean, default = True)
    parking = db.Column(db.String(250), nullable=False)



    
    def __str__(self):
        return(
            f'id: {self.id}, '
            f'availabity: {self.availabity}, '
            f'parking: {self.parking}'
        )