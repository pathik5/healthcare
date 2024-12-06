from utils.db import get_db_connection

def get_all_patients():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM patients")
    results = cursor.fetchall()
    cursor.close()
    connection.close()
    return results

def get_all_consultations():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM consultations")
    results = cursor.fetchall()
    cursor.close()
    connection.close()
    return results