import {} from "react";
import MaleDoctor from "../assets/MaleDoctor.png";

function Hero() {
  return (
    <>
      <section className="flex justify-between my-0 mx-10 px-20">
        <form className="max-w-[900px] bg-white p-20 rounded-lg">
          <a href="/" className="text-[#9fb1e9] text-xl no-underline">
            Please turn on your location to get personalised recommendations.
          </a>
          <div className="grid grid-cols-2 gap-5 mt-3">
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
                placeholder="Ikeja"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col pt-2">
              <label className="text-[#252525c5] py-1">HMO</label>
              <input
                type="text"
                placeholder="Precious HMO"
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
            <button
              type="submit"
              className="px-10 py-3 bg-[#1E5FC0] text-white rounded-full text-lg hover:bg-[#2448b3] border border-[#1E5FC0]"
            >
              Search
            </button>
          </div>
        </form>
        <div className="image1">
          <img src={MaleDoctor} alt="male doctor" lassName="w-100 h-100 object-cover"/>
        </div>
      </section>
    </>
  );
}

export default Hero;
