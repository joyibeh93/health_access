import {} from "react";
import FemaleDoctor from "../assets/FemaleDoctor.png";

function Header() {
  return (
    <>
      <header className="flex justify-between p-5 mx-28">
        <h2 className="m-0 text-3xl text-[#1E5FC0]">Healthcare Access</h2>
        <nav>
          <a href="#" className="px-6 py-3 bg-[#1E5FC0] text-white rounded-full text-md hover:bg-[#2448b3] border border-[#1E5FC0]">Home</a>
          <a href="#" className="mx-2 text-[#1E5FC0] text-lg no-underline">About Us</a>
        </nav>
      </header>
      <section className="flex justify-between my-5 mx-30 p-20">
        <div className="mb-5 px-10">
          <h1 className="text-5xl w-[490px]">Welcome to Healthcare Access.</h1>
          <p className="mt-7 text-[#1E5FC0]">Discover personalised healthcare access points nearby.</p>
          <button className="mt-5 bg-[#1E5FC0] text-white py-2 px-5 rounded-full hover:bg-[#2448b3]">Get Started</button>
        </div>
        <div className="image1">
          <img src={FemaleDoctor} alt="Doctor" />
        </div>
      </section>
    </>
  );
}

export default Header;
