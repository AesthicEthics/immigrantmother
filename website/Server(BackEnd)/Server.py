from flask import Flask,render_template,request,redirect,url_for,session
from flask_sqlalchemy import SQLAlchemy
from flask import request 
import flask 
from datatests import AverageTimeSpan, Slaps
from brain import finale 


data = finale()


app = Flask(__name__) 
app.secret_key = "abd2c3f79cb0f77c82ef78aa"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.sqlite3"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class users(db.Model):
    _id = db.Column("id",db.Integer,primary_key=True)
    FirstName = db.Column(db.String(100))
    LastName = db.Column(db.String(100))
    Password = db.Column(db.String(100))

    def __init__(self,FirstName,LastName,Password):
        self.FirstName = FirstName
        self.LastName = LastName
        self.Password = Password

accounts = []

app = Flask(__name__) 

@app.route('/send', methods=['GET'])
def send():
    return {
        'userid': 1,
        'title': 'Idiot thing',
        'completed': False
    }

@app.route('/signup', methods=['POST'])
def recv():
    FirstName = request.json['FirstName']
    LastName = request.json['LastName']
    Password = request.json['Password']
    f = open('test.txt', 'w+')
    f.write(f'{FirstName}, {LastName}, {Password}')
    f.close()
    return (flask.jsonify(result={"status": 200}))

@app.route('/stats', methods=['GET'])
def Stats():
    TimeSpan = AverageTimeSpan(data)
    Whooping = Slaps(data)
    f = open('datatest.txt','w+')
    f.write(f'{TimeSpan}, {Whooping}')
    f.close()
    return {
        'ATN': {TimeSpan},
        'Slaps':{Whooping}
    }
