import { Fragment } from "react";
import "./section-1.style.scss";
import { Link } from "react-router-dom";
const Section1 = () => {
  return (
    <Fragment>
      <section className="home-section-1">
        {/* <div className="home-icons">
        <HomeIcons />
      </div> */}
        <div className="home-header">
          <div className="home-header-slogan">
            <span className="home-header-name">
              BILIM<span style={{ color: "#ba9e66" }}>DENT</span>
            </span>
            <br />
            <span className="home-header-name-2">
              where dental excellence meets personalized care
            </span>
          </div>
          <div className="home-header-small">
            At least 10 years of professional experience
          </div>
          <a target="_" href="https://bilimdentrandevu.antalya.edu.tr/">
            <div className="home-button">Online Appointment</div>
          </a>
        </div>

        <div className="home-container">
          <div className="home-image-2">
            <img
              width="600px"
              height="500px"
              src={require("../../../../assets/bilimdent3.jpg")}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Section1;
