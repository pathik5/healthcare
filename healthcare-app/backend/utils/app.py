from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from resources.auth import auth_bp
from resources.patient import patient_bp
from resources.consultation import consultation_bp
from resources.error_handlers import error_bp
import os

# Initialize the app
app = Flask(__name__)

# Load config from config.py
app.config.from_pyfile('config.py')

# Initialize extensions
db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)

# Register Blueprints (modular routes)
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(patient_bp, url_prefix='/patient')
app.register_blueprint(consultation_bp, url_prefix='/consultation')
app.register_blueprint(error_bp)

# Run the app
if __name__ == "__main__":
    app.run(debug=True)