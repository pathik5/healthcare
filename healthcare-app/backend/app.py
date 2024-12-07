from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash

# Initialize Flask app
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS) to allow frontend requests
CORS(app)

# JWT Configuration
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'
jwt = JWTManager(app)


def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",  
        password="",  
        database="healthcare_db"  
    )

@app.route('/auth/signup', methods=['POST'])
def signup():
    data = request.get_json()

   
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    phone_number = data.get('phone_number')
    location = data.get('location')

    if not username or not email or not password or not phone_number or not location:
        return jsonify({"message": "Missing fields"}), 400

   
    hashed_password = generate_password_hash(password, method='sha256')


    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    existing_user = cursor.fetchone()

    if existing_user:
        return jsonify({"message": "User already exists"}), 400

    cursor.execute("INSERT INTO users (username, email, password, phone_number, location) VALUES (%s, %s, %s, %s, %s)",
                   (username, email, hashed_password, phone_number, location))
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({"message": "User created successfully"}), 201


@app.route('/auth/login', methods=['POST'])
def login():
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Missing fields"}), 400

   
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()

    if user and check_password_hash(user[3], password):  

        access_token = create_access_token(identity=email)
        cursor.close()
        conn.close()
        return jsonify({"access_token": access_token}), 200
    else:
        cursor.close()
        conn.close()
        return jsonify({"message": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)