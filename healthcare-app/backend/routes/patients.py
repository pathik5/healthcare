from flask import Blueprint, jsonify
from models import get_all_patients

patients_bp = Blueprint('patients', __name__)

@patients_bp.route("/", methods=["GET"])
def get_patients():
    patients = get_all_patients()
    if not patients:
        return jsonify({"error": "No patients found"}), 404
    return jsonify(patients)