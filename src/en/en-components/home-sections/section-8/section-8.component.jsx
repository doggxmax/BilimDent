import { Fragment } from "react";
import "./section-8.style.scss";
const Section8 = () => {
  return (
    <Fragment>
      <section className="home-section-8">
        <div className="home-section-8-wrap">
          <h2 className="section-8-heading">How to find us?</h2>
          <div className="home-section-8-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12764.13865535209!2d30.701530000000005!3d36.889519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39168862b4aab%3A0xfe8d75ae883ee6c4!2zQmlsaW1EZW50IEHEn8SxeiB2ZSBEacWfIFNhxJ9sxLHEn8SxIFV5Z3VsYW1hIHZlIEFyYcWfdMSxcm1hIE1lcmtlemk!5e0!3m2!1sen!2sus!4v1680510267587!5m2!1sen!2sus"
              width="1400"
              height="600"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Section8;
