import mysql.connector
import logging

def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host="localhost",        
            user="root",             
            password="", 
            database="healthcare_db" 
        )
        return connection
    except mysql.connector.Error as err:
        logging.error(f"Database connection failed: {err}")
        return None