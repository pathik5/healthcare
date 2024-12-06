from flask import Flask, jsonify, request
from utils.geolocation import get_nearby_hospitals
from utils.call import make_call

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Healthcare Accessibility API!"})

@app.route('/nearby-hospitals', methods=['GET'])
def nearby_hospitals():
    lat = request.args.get('lat')
    lng = request.args.get('lng')
    hospitals = get_nearby_hospitals(lat, lng)
    return jsonify(hospitals)

@app.route('/call-doctor', methods=['POST'])
def call_doctor():
    data = request.json
    response = make_call(data['phone_number'])
    return jsonify({"status": response})

if __name__ == "__main__":
    app.run(debug=True)