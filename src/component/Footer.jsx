import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 text-center">
      <p className="text-gray-600">
        Discover personalised healthcare access points nearby.
      </p>
      <div className="mt-4 flex justify-center space-x-4 text-blue-600 footer-icons">
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
    </footer>
  );
};

export default Footer;
