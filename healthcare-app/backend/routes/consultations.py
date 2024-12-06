from flask import Blueprint, jsonify
from models import get_all_consultations

consultations_bp = Blueprint('consultations', __name__)

@consultations_bp.route("/", methods=["GET"])
def get_consultations():
    consultations = get_all_consultations()
    if not consultations:
        return jsonify({"error": "No consultations found"}), 404
    return jsonify(consultations)