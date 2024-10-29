import React from 'react';

const GoogleMapEmbed = () => {
  return (
    <div className="w-full lg:w-1/2 h-64 bg-gray-300 rounded-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4382.474220993006!2d3.3568276652729945!3d6.594646698365113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9238da53faef%3A0x1b4fd70c1050441d!2sAXA%20Mansard%20Allen%20Ikeja!5e0!3m2!1sen!2sng!4v1729365665892!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
