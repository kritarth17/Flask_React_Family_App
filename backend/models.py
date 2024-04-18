from config import db

class Person(db.Model):
    id = db.Column(db.Integer, primary_key= True)
    first_name = db.Column(db.String(80), unique=False, nullable=False )
    last_name = db.Column(db.String(80), unique=False, nullable=False )
    gender = db.Column(db.String(80), unique=False, nullable=False )
    date_of_birth = db.Column(db.String(120), unique= False, nullable=False)

    def to_json(self):
        return{
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "gender": self.gender,
            "dateOfBirth": self.date_of_birth,
        }
        
