from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask import request 
import flask 

app = Flask(__name__) 

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
    f = open('test.txt','w+')
    f.write(FirstName)
    f.close()
    return ([FirstName, LastName, Password])
