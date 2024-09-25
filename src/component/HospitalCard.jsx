import React from 'react';

const HospitalCard = ({ hospital }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col space-y-2 w-full max-w-sm hospital-card">
      <img
        src={hospital.image}
        alt={`${hospital.name}`}
        className="w-full h-32 object-cover rounded-lg"
      />
      <h3 className="text-lg font-bold text-blue-600">{hospital.name}</h3>
      <p className="text-sm">{hospital.address}</p>
      <p className="text-sm text-gray-600">Phone: {hospital.phone}</p>
      <div className="flex justify-between text-sm">
        <span>Distance: {hospital.distance}</span>
        <span>Time: {hospital.time}</span>
      </div>
      <div className="flex">
        {Array.from({ length: 5 }, (v, i) => (
          <span
            key={i}
            className={`h-4 w-4 ${
              i < hospital.rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default HospitalCard;
