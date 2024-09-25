import React from 'react';
import hospitalImage from '../assets/hospitalImage.png'

const HospitalCard = ({ hospital }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col lg:flex-row space-y-2 w-full max-w-sm lg:max-w-lg hospital-card">
      <div className='lg:w-1/3 w-full'>
      <img
        src={hospitalImage}
        alt={`${hospital.name}`}
        className="w-full h-32 object-cover rounded-lg"
      />
      </div>
      <div className="p-4 flex flex-col space-y-2 w-full max-w-sm lg:w-2/3">
      <h3 className="text-lg font-bold text-blue-600">{hospital.name}</h3>
      <p className="text-sm text-gray-700">{hospital.address}</p>
      <p className="text-sm text-gray-600">Phone: {hospital.phone}</p>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Distance: {hospital.distance}</span>
        <span>Time: {hospital.time}</span>
      </div>
      <div className="flex space-x-1">
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
    </div>
  );
};

export default HospitalCard;
