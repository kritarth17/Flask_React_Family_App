from flask import jsonify, request
from config import app, db
from models import Person

@app.route("/people", methods=["GET"])
def get_people():
    people = Person.query.all()
    json_people = list(map(lambda x: x.to_json(), people))
    return (jsonify({"people": json_people}))

@app.route("/add_people", methods=["POST"])
def add_people():
    first_name = request.json.get("firstName")
    last_name = request.json.get("lastName")
    gender = request.json.get("gender")
    date_of_birth = request.json.get("dateOfBirth")

    if not first_name or not last_name or not date_of_birth:
        return (jsonify({"message": "You must include first name, last name and date of birth"}), 400)
    
    new_person = Person(first_name= first_name, last_name= last_name, gender = gender, date_of_birth=date_of_birth)
    try:
        db.session.add(new_person)
        db.session.commit()
    except Exception as e:
        return (jsonify({"message": str(e)}), 400)
    
    return jsonify({"message": "User created"}), 201


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)