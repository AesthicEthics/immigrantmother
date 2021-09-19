from flask import Flask,render_template,request,redirect,url_for,session
from flask_sqlalchemy import SQLAlchemy
from flask_restx import Api, Resource
from config import DevConfig

app=Flask(__name__)
app.config.from_object(DevConfig)
api = Api(app, doc="/docs")

@api.route("/hello")
class HelloResource(Resource):
    def get(self):
        return {"message":"Hello World"}

@app.route("/")
def tohome():
    return redirect(url_for("home"))

@app.route("/home")
def home():
    return render_template("index.html")

@app.route("/signup", methods=["GET", "POST"])
def signup():
    id = request.json
    print(id)
    return "this page"

if __name__ == "__main__":
    app.run(debug=True)