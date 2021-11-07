from flask import Flask, jsonify
from flask.helpers import send_from_directory

# comment out on deployment
# from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder="frontend/build", static_url_path="")

# comment out on deployment
# CORS(app)

# dictionary that holds first and last names of my name and spider-man actors
dict = {
    "Tom" : "Holland",
    "Toby" : "Maguire",
    "Peter" : "Parker",
    "Andrew" : "Garfield"
}

#Method that searches for firstname in dict and returns the last name as json
@app.route("/find/<name>", methods=["GET"])
# @cross_origin()
def getLastName(name: str):
    lastName = ""
    if(name in dict):
        lastName = dict[name]
    else:
        lastName = "Name not found"
    return jsonify(output=lastName)
    
# Gets displayed when only on host addr
@app.route("/")
# @cross_origin()
def index():
    return send_from_directory(app.static_folder, "index.html")