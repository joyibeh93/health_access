import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 text-center space-y-4">
      <h2 className="text-black-900 text-lg font-bold">Healthcare Access</h2>
      <p className="text-gray-600">
        Discover personalised healthcare access points nearby.
      </p>
      <div className="mt-4 flex justify-center space-x-4 text-black-600 footer-icons">
        <a href="#" className="hover:text-blue-800">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="hover:text-blue-800">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-blue-800">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="hover:text-blue-800">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className='mt-4 flex justify-center space-x-2'>
        <i className="fab fa-solid fa-location-dot"></i>
        <p className='text-black-600'>Your address</p>
      </div>
    </footer>
  );
};

export default Footer;
