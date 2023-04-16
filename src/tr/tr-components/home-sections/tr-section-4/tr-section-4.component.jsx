import { Fragment } from "react";
import "./tr-section-4.style.scss";
const TrSection4 = () => {
  return (
    <Fragment>
      <section className="home-section-4">
        <div className="home-section-4-wrapper">
          <div className="home-section-4-i">
            <img src={require("../../../../assets/gallery-1.jpg")} />
          </div>
          <div className="home-section-4-i">
            <img src={require("../../../../assets/gallery-2.jpg")} />
          </div>
          <div className="home-section-4-i">
            <img src={require("../../../../assets/gallery-3.jpg")} />
          </div>
          <div className="home-section-4-i">
            <img src={require("../../../../assets/gallery-4.jpg")} />
          </div>
          <div className="home-section-4-i">
            <img src={require("../../../../assets/gallery-5.jpg")} />
          </div>
          <div className="home-section-4-i">
            <img src={require("../../../../assets/gallery-6.jpg")} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default TrSection4;
