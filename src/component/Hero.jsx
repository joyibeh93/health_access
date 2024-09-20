import {} from "react";
import MaleDoctor from "../assets/MaleDoctor.png";
import "../Styles/Header.css";

function Hero() {
  return (
    <>
      <section className="hero-section">
        <form className="search-form">
          <a href="/">
            Please turn on your location to get personalised recommendations.
          </a>
          <div className="form-grid">
            <div>
              <label>State</label>
              <input type="text" placeholder="Lagos" />
            </div>
            <div>
              <label>City</label>
              <input type="text" placeholder="Ikeja" />
            </div>
            <div>
              <label>HMO</label>
              <input type="text" placeholder="Precious HMO" />
            </div>
            <div>
              <label>Healthcare Type</label>
              <input type="text" placeholder="Hospital" />
            </div>
          </div>
          <div className="submit-button">
          <button type="submit" >Search</button>
          </div>

        </form>
        <div className="image1">
          <img src={MaleDoctor} alt="male doctor" />
        </div>
      </section>
    </>
  );
}

export default Hero;
