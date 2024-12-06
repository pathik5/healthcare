from flask import Flask, jsonify
from utils.db import get_db_connection

app = Flask(__name__)

@app.route("/test-db", methods=["GET"])
def test_db():
    conn = get_db_connection()
    if conn:
        cursor = conn.cursor()
        cursor.execute("SHOW TABLES;")
        tables = cursor.fetchall()
        conn.close()
        return jsonify({"success": True, "tables": tables}), 200
    else:
        return jsonify({"success": False, "message": "Database connection failed"}), 500

if __name__ == "__main__":
    app.run(debug=True)