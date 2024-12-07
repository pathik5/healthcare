@app.route('/auth/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    user = User.query.filter_by(email=email).first()
    if user and user.check_password(password):
    
        access_token = create_access_token(identity=user.id)  
        return jsonify({'access_token': access_token})
    return jsonify({'message': 'Invalid credentials'}), 401