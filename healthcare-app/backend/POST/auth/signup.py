@app.route('/auth/signup', methods=['POST'])
def signup():
    data = request.json
    username = data['username']
    email = data['email']
    password = data['password']
    phone_number = data['phone_number']
    location = data['location']

    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already exists'}), 400

    # Create the new user
    new_user = User(username=username, email=email, password=generate_password_hash(password), phone_number=phone_number, location=location)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'}), 201