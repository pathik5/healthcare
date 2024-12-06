// src/pages/History.js
import React from 'react';

const History = ({ consultations }) => {
  return (
    <div className="history-container">
      <h2>Your Consultation History</h2>
      {consultations.length === 0 ? (
        <p>You have no consultation history.</p>
      ) : (
        <ul>
          {consultations.map((consultation, index) => (
            <li key={index}>
              <h3>Consultation with {consultation.doctor}</h3>
              <p>Date: {consultation.date}</p>
              <p>Feedback: {consultation.feedback}</p>
              <p>Rating: {consultation.rating}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;