from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


#creating instance of flask 
#__name__ is a special variable in Python that represents the name of the current module.
#By passing __name__ to the Flask constructor, 
#you are telling Flask to use the current module as the name of the application package. 

app = Flask(__name__)

#This allows your Flask application to respond to requests from web pages hosted on different domains.
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///family_tree.db"
app.config["SQLALCHEMY_TRACK_MODIFICATION"] = False

#you're creating a SQLAlchemy object db and binding it to your Flask application app.
db = SQLAlchemy(app)

