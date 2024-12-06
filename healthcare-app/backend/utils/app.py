from flask import Flask
from routes.patients import patients_bp
from routes.consultations import consultations_bp

app = Flask(__name__)

# Register blueprints
app.register_blueprint(patients_bp, url_prefix="/patients")
app.register_blueprint(consultations_bp, url_prefix="/consultations")

if __name__ == "__main__":
    app.run(debug=True)