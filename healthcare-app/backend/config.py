import os

# Secret key for session management
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key")

# SQLAlchemy settings
SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///healthcare.db')  # Change to your actual database
SQLALCHEMY_TRACK_MODIFICATIONS = False

# JWT settings
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "your-jwt-secret-key")