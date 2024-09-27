import {} from "react";


function Header() {
  return (
    <>
      <header className="flex justify-between  p-10 mx-28">
        <h2 className="m-0 text-3xl text-[#1E5FC0]">Healthcare Access</h2>
        <nav>
          <a href="#" className="px-6 py-3 text-[#1E5FC0] rounded-full text-md hover:bg-[#1E5FC0] hover:text-white">Home</a>
          <a href="#" className="mx-2 px-6 py-3 text-[#1E5FC0] text-lg no-underline rounded-full text-md hover:bg-[#1E5FC0] hover:text-white">About Us</a>
          <a href="#" className="mx-2 px-6 py-3 text-[#1E5FC0] text-lg no-underline rounded-full text-md hover:bg-[#1E5FC0] hover:text-white">Our Service</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
