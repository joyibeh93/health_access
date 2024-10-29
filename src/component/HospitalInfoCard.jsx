import React from 'react';
import hospitalImage from '../assets/hospitalImage.png'

const HospitalInfoCard = () => {


  const { id } = useParams();
  const navigate = useNavigate();

  // Find the hospital using the id from the URL
  const hospital = hospitals.find(h => h.id === parseInt(id));

  return (

    <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-1/2">
      <h3 className="text-2xl font-semibold text-blue-600">{hospital.name}</h3>
      <div className="flex items-center my-2">
        <span className="text-yellow-400 text-lg">★★★★☆</span>
        <span className="ml-2 text-gray-600">{hospital.rating}</span>
      </div>
      <p className="text-blue-500 text-lg mb-2">{hospital.address}</p>
      <p className="text-gray-700 mb-2">Phone: {hospital.phone}</p>
      <h4 className="text-lg font-semibold mb-2">Services:</h4>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
      </p>
      <div className="flex space-x-4">
        <a href="#directions" className="text-blue-600 font-semibold underline">View Directions</a>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Book Appointment</button>
      </div>
    </div>
  );
};

export default HospitalInfoCard;