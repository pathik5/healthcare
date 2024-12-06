from flask import Flask
from .extensions import db, migrate
from .routes import auth_routes, user_routes, hospital_routes, feedback_routes

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)

    # Register blueprints
    app.register_blueprint(auth_routes.bp)
    app.register_blueprint(user_routes.bp)
    app.register_blueprint(hospital_routes.bp)
    app.register_blueprint(feedback_routes.bp)

    return app