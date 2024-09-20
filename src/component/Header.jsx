import {} from "react";
import FemaleDoctor from "../assets/FemaleDoctor.png";
import "../Styles/Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <h2>Healthcare Access</h2>
        <nav>
          <a href="#" className="home-link">Home</a>
          <a href="#">About Us</a>
        </nav>
      </header>
      <section className="welcome-section">
        <div className="text">
          <h1>Welcome to Healthcare Access.</h1>
          <p>Discover personalised healthcare access points nearby.</p>
          <button>Get Started</button>
        </div>
        <div className="image1">
          <img src={FemaleDoctor} alt="Doctor" />
        </div>
      </section>
    </>
  );
}

export default Header;
