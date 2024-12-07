import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type validation

const History = ({ consultations }) => {
  return (
    <div className="history-container">
      <h2>Your Consultation History</h2>
      {consultations.length === 0 ? (
        <p>You have no consultation history.</p>
      ) : (
        <ul>
          {consultations.map((consultation) => (
            <li key={consultation.id || consultation.date}> {/* Use unique id or date as key */}
              <h3>Consultation with Dr. {consultation.doctor}</h3>
              <p>Date: {consultation.date}</p>
              <p>Feedback: {consultation.feedback || 'No feedback provided'}</p>
              <p>Rating: {consultation.rating || 'Not rated'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Prop validation
History.propTypes = {
  consultations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,  // Unique identifier for the consultation
      doctor: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      feedback: PropTypes.string,
      rating: PropTypes.number,
    })
  ).isRequired,
};

export default History;