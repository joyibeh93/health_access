import {} from "react";
import { useNavigate } from 'react-router-dom'
import MaleDoctor from "../assets/MaleDoctor.png"
import FemaleDoctor from "../assets/FemaleDoctor.png"


function Hero() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/results');
  };

  return (
    <>
      <section className="flex md:flex-wrap justify-between my-10 mx-10 p-20">
        <div className=" max-w-[900px] mb-5 px-10 w-1/2">
          <h1 className=" text-7xl w-[610px] leading-15 ">Welcome to Healthcare Access.</h1>
          <p className="mt-7  text-3xl md:text-sm text-[#1E5FC0]">
            Discover personalised healthcare access points nearby. Know your way around through our guide
          </p>
          <button className="mt-5 bg-[#1E5FC0] text-lg text-white py-2 px-5 rounded-full hover:bg-[#2448b3]">
            Get Started
          </button>
        </div>
        <div className="cont-img">
          <img
            src={FemaleDoctor}
            alt="Doctor"
            className="image1 object-fill md:w-32 lg:w-48 "
          />
        </div>
      </section>
      <section className="flex md:flex-wrap justify-between my-0 mx-10 px-20">
        <form className="max-w-[900px] bg-white p-20 rounded-lg">
          <a href="/" className="text-[#2448b3] text-xl no-underline">
            Please turn on your location to get personalised recommendations.
          </a>
          <div className="grid grid-cols-2 gap-5 mt-">
            <div className="flex flex-col pt-2">
              <label className="text-[#252525c5] py-1">State</label>
              <input
                type="text"
                placeholder="Lagos"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col pt-2">
              <label className="text-[#252525c5] py-1">City</label>
              <input
                type="text"
                placeholder="Ikordou"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col pt-2">
              <label className="text-[#252525c5] py-1">Area</label>
              <input
                type="text"
                placeholder="Ebutte"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col pt-2">
              <label className="text-[#252525c5] py-1">Healthcare Type</label>
              <input
                type="text"
                placeholder="Hospital"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button onClick={handleButtonClick}
              type="submit"
              className="px-10 py-3 bg-[#1E5FC0] text-white rounded-full text-lg hover:bg-[#2448b3] border border-[#1E5FC0]"
            >
              Search
            </button>
          </div>
        </form>
        <div className="cont-img">
          <img
            src={MaleDoctor}
            alt="male doctor"
            className=" image1 object-fill md:w-32 lg:w-48"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
