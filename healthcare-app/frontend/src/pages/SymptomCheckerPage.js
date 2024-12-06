// src/pages/SymptomCheckerPage.js
import React, { useState } from 'react';

const SymptomCheckerPage = () => {
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process symptoms (e.g., send to backend for analysis)
    console.log('Symptoms:', symptoms);
  };

  return (
    <div>
      <h1>Symptom Checker</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Describe your symptoms..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SymptomCheckerPage;