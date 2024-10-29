import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import hospitalImage from '../assets/hospitalImage.png';

// Sample hospitals data (you might need to import this from a separate file or pass it as props)
const hospitals = [
  {
      id: 1,
      name: 'Hospital A',
      address: '70 Pleasant Valley Street, Methuen MA 1844',
      phone: '+108093497609',
      distance: '0.6 km',
      time: '5 mins',
      rating: 4.5,
      image: 'hospital-image-url',
    },
    {
      id: 2,
      name: 'Hospital B',
      address: '742 Main Street, North Oxford MA 1537',
      phone: '+600350042877',
      distance: '1.6 km',
      time: '8 mins',
      rating: 4.0,
      image: 'hospital-image-url',
    },
    {
      id: 3,
      name: 'Hospital C',
      address: '1000 State Route 36, Hornell NY 14843',
      phone: '+287964864321',
      distance: '1.4 km',
      time: '12 mins',
      rating: 3.5,
      image: 'hospital-image-url',
    },
    {
      id: 4,
      name: 'Hospital D',
      address: '58 Brooklawn Village Way, Danvers MA 1923',
      phone: '+425769178448',
      distance: '1.2 km',
      time: '10 mins',
      rating: 4.8,
      image: 'hospital-image-url',
    },
    {
      id: 5,
      name: 'Hospital X',
      address: '279 Troy Road, East Greenbush NY 12061',
      phone: '+492431926059',
      distance: '3 km',
      time: '20 mins',
      rating: 4.2,
      image: 'hospital-image-url',
    },
    {
      id: 6,
      name: 'Hospital Y',
      address: '425 Route 34, Macedon NY 14502',
      phone: '+509344018021',
      distance: '5 km',
      time: '25 mins',
      rating: 3.8,
      image: 'hospital-image-url',
    },
];

const HospitalInfoCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the hospital using the id from the URL
  const hospital = hospitals.find((h) => h.id === parseInt(id));

  // Handle case when hospital is not found
  if (!hospital) {
    return <p>Hospital not found.</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8 w-full lg:max-w-5xl">
      {/* Left Section: Hospital Details */}
      <div className="w-full lg:w-1/2">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 font-semibold mb-4"
        >
          ← Back
        </button>
        <h3 className="text-2xl font-semibold text-blue-600">{hospital.name}</h3>
        <div className="flex items-center my-2">
          <span className="text-yellow-400 text-lg">★★★★☆</span>
          <span className="ml-2 text-gray-600">{hospital.rating}</span>
        </div>
        <p className="text-blue-500 text-lg mb-2">{hospital.address}</p>
        <p className="text-gray-700 mb-2">Phone: {hospital.phone}</p>
        <h4 className="text-lg font-semibold mb-2">Services:</h4>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <div className="flex space-x-4">
          <a href="#directions" className="text-blue-600 font-semibold underline">
            View Directions
          </a>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Right Section: Hospital Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={hospitalImage}
          alt={`${hospital.name}`}
          className="w-full h-64 object-cover rounded-lg shadow"
        />
      </div>
    </div>
  );
};

export default HospitalInfoCard;
