import { Fragment } from "react";
import "./section-2.style.scss";
const Section2 = () => {
  return (
    <Fragment>
      <section className="home-section-2">
        <div className="home-section-2-wrapper">
          <div className="home-section-2-description">
            <p>
              Since BilimDent is the first and only Academic Dental Clinic in
              Antalya, our entire team is professional, experienced and ready to
              offer you the healthy smile you want to have. You can discover the
              unique Mediterranean history and culture and relax on the
              beautiful beaches while having your treatment in professional
              hands.
            </p>
          </div>
          <div className="home-section-2-adv">
            <div className="adv-free"> FREE </div>
            <div className="adv-description">
              <div className="hover-underline-animation">CONSULTATION</div>
              <div className="hover-underline-animation">DIAGNOSIS</div>
              <div className="hover-underline-animation">TRANSFER</div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Section2;
