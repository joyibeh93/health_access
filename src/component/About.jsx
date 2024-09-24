import React from "react";
import PropTypes from "prop-types";

function About(props) {
  return (
    <>
      {/* About Us Section */}
      <section className="mt-4 p-20">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <div className="flex flex-row flex-wrap justify-between">
          {/* Text section */}
            <p className="basis-1/2 text-2xl text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
          {/* Image and title container */}
          <div className="basis-1/4 bg-white p-6 shadow-lg rounded-md">
            <div className="h-40 bg-gray-300 mb-4"></div>
            <h3 className="text-xl font-semibold">Borem ipsum</h3>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card */}
          <div className="bg-white p-6 shadow-lg rounded-md">
            <div className="h-40 bg-gray-300 mb-4"></div>
            <h3 className="text-xl font-semibold">Borem ipsum</h3>
          </div>

          {/* Service Card */}
          <div className="bg-white p-6 shadow-lg rounded-md">
            <div className="h-40 bg-gray-300 mb-4"></div>
            <h3 className="text-xl font-semibold">Porem ipsum</h3>
          </div>

          {/* Service Card */}
          <div className="bg-white p-6 shadow-lg rounded-md">
            <div className="h-40 bg-gray-300 mb-4"></div>
            <h3 className="text-xl font-semibold">Vorem ipsum</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
