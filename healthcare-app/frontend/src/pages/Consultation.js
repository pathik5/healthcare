// src/pages/Consultation.js
import React, { useState } from 'react';
import "../assets/styles/Consultation.css";

const Consultation = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (e) => setRating(e.target.value);
  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  const submitFeedback = () => {
    alert(`Rating: ${rating}, Feedback: ${feedback}`);
    
  };

  return (
    <div className="consultation">
      <h2>Consult with a Doctor</h2>
      <p>Connect with our doctors for consultation.</p>
      <div className="rating">
        <label>Rate your consultation: </label>
        <input type="number" value={rating} onChange={handleRatingChange} max="5" min="1" />
      </div>
      <div className="feedback">
        <label>Leave feedback: </label>
        <textarea value={feedback} onChange={handleFeedbackChange} />
      </div>
      <button onClick={submitFeedback}>Submit Feedback</button>
    </div>
  );
};

export default Consultation;