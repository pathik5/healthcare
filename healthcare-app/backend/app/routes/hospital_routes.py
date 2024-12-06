from flask import Blueprint, jsonify
from ..models.hospital import Hospital

bp = Blueprint('hospital_routes', __name__, url_prefix='/hospitals')

@bp.route('/')
def get_hospitals():
    hospitals = Hospital.query.all()
    return jsonify([{'id': h.id, 'name': h.name, 'address': h.address, 'phone': h.phone_number} for h in hospitals])