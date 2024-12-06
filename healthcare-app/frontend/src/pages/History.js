// src/pages/History.js
import React from 'react';

const History = ({ consultations }) => {
  return (
    <div>
      <h1>Consultation History</h1>
      <ul>
        {consultations.map((consultation, index) => (
          <li key={index}>
            <h3>{consultation.date}</h3>
            <p>{consultation.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;