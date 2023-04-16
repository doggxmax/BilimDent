import { Fragment, useEffect, useRef } from "react";
import "./section-5.style.scss";
import { ReactComponent as Check } from "../../../../assets/check-1.svg";

const Section5 = () => {
  return (
    <Fragment>
      <section className="home-section-5">
        <div className="home-section-5-wrap">
          <div className="home-section-5-container">
            <div className="home-section-5-header">
              <span className="home-section-5-smallh">What we offer at </span>
              <span className="home-section-5-heading">
                BILIM<span className="">DENT</span>
              </span>
            </div>
            <div className="home-section-5-list">
              <li>
                <Check />
                Central Location
              </li>
              <li>
                <Check />
                World – Class & High – Tech Service{" "}
              </li>
              <li>
                <Check />
                Panaromic X – Ray
              </li>
              <li>
                <Check />
                Volumatric Tomography
              </li>
              <li>
                <Check />
                'A' Grade Materials
              </li>
              <li>
                <Check />
                Highest Standards Regarding Hygiene
              </li>
              <li>
                <Check />
                Long – Term Guarantee On All Treatments
              </li>
            </div>
          </div>

          <div className="home-section-5-image-container">
            <img src={require("../../../../assets/gallery-2.jpg")} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Section5;
