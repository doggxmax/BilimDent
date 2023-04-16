import { Fragment } from "react";
import "./section-4.style.scss";
const Section4 = () => {
  return (
    <Fragment>
      <section className="home-section-4">
        <div className="home-section-4-wrapper">
          <div className="home-section-4-i">
            <img
              width="306"
              height="249"
              src={require("../../../../assets/gallery-1.jpg")}
            />
          </div>
          <div className="home-section-4-i">
            <img
              width="306"
              height="249"
              src={require("../../../../assets/gallery-2.jpg")}
            />
          </div>
          <div className="home-section-4-i">
            <img
              width="306"
              height="249"
              src={require("../../../../assets/gallery-3.jpg")}
            />
          </div>
          <div className="home-section-4-i">
            <img
              width="306"
              height="249"
              src={require("../../../../assets/gallery-4.jpg")}
            />
          </div>
          <div className="home-section-4-i">
            <img
              width="306"
              height="249"
              src={require("../../../../assets/gallery-5.jpg")}
            />
          </div>
          <div className="home-section-4-i">
            <img
              width="306"
              height="249"
              src={require("../../../../assets/gallery-6.jpg")}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Section4;
