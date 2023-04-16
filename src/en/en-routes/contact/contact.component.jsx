import { Fragment, useEffect, useRef } from "react";
import "./contact.style.scss";
import { ReactComponent as Email } from "../../../assets/email.svg";
import { ReactComponent as Map } from "../../../assets/map.svg";
import { ReactComponent as Phone } from "../../../assets/phone.svg";
import { ReactComponent as Clock } from "../../../assets/clock.svg";
const Contact = () => {
  const handleSubmit = (e) => {
    console.log(e);
  };
  const submitRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
    // submitRef.current.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <Fragment>
      <div className="contact">
        <h1 className="contact-heading">
          CONTACT <span>US</span>
        </h1>
        <div className="contact-container">
          <div className="contact-wrap">
            <div className="contact-wrap-container">
              <div className="contact-cont">
                <div className="contact-image">
                  <Email />
                </div>
                <div className="contact-data">Email</div>
                <div className="contact-data-desc">
                  bilimdent@antalya.edu.tr
                </div>
              </div>
            </div>
            <div className="contact-wrap-container">
              <div className="contact-cont">
                <div className="contact-image">
                  <Map />
                </div>
                <div className="contact-data">Location</div>
                <div className="contact-data-desc">
                  Tahılpazarı, Mahallesi,
                  <br /> Kazım Özalp Cd. No 84 D:Kat 9,
                  <br /> 07040 Muratpaşa/Antalya
                </div>
              </div>
            </div>
            <div className="contact-wrap-container">
              <div className="contact-cont">
                <div className="contact-image">
                  <Phone />
                </div>
                <div className="contact-data">Attendance</div>
                <div className="contact-data-desc">+90 (242) 245 00 11</div>
              </div>
            </div>
            <div className="contact-wrap-container">
              <div className="contact-cont">
                <div className="contact-image">
                  <Clock />
                </div>
                <div className="contact-data">Working Hours</div>
                <div className="contact-data-desc">
                  Monday - Saturday: 9AM - 17PM Sunday: Closed
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-container-2" ref={submitRef}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-in">
              <label className="contact-name">
                Name Surname<span> *</span>
              </label>
              <input type="text" />
            </div>
            <div className="contact-form-in">
              <label className="contact-email">
                Email Adress<span> *</span>
              </label>
              <input type="text" />
            </div>
            <div className="contact-form-in">
              <label className="contact-subj">
                Subject<span> *</span>
              </label>
              <input type="text" />
            </div>
            <div className="contact-form-in form-in-last">
              <label className="contact-comment">
                Comments/Questions<span> *</span>
              </label>
              <textarea className="text-area" type="text" />
            </div>

            <div className="contact-button" type="button">
              Send Message
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default Contact;
