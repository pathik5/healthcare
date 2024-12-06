import React from 'react';

const HospitalList = ({ hospitals }) => {
  return (
    <div>
      <h2>Nearby Hospitals</h2>
      <ul>
        {hospitals.map(hospital => (
          <li key={hospital.id}>
            <h3>{hospital.name}</h3>
            <p>{hospital.address}</p>
            <p>{hospital.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalList;