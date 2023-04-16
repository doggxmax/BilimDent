import { Fragment, useEffect, useRef } from "react";
import "./tr-contact.style.scss";
import { ReactComponent as Email } from "../../../assets/email.svg";
import { ReactComponent as Map } from "../../../assets/map.svg";
import { ReactComponent as Phone } from "../../../assets/phone.svg";
import { ReactComponent as Clock } from "../../../assets/clock.svg";
const TrContact = () => {
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
          İLETİ
          <span>ŞİM</span>
        </h1>
        <div className="contact-container">
          <div className="contact-wrap">
            <div className="contact-wrap-container">
              <div className="contact-cont">
                <div className="contact-image">
                  <Email />
                </div>
                <div className="contact-data">E-Posta</div>
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
                <div className="contact-data">Konum</div>
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
                <div className="contact-data">Telefon</div>
                <div className="contact-data-desc">+90 (242) 245 00 11</div>
              </div>
            </div>
            <div className="contact-wrap-container">
              <div className="contact-cont">
                <div className="contact-image">
                  <Clock />
                </div>
                <div className="contact-data">Çalışma Saatleri</div>
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
                Ad Soyad<span> *</span>
              </label>
              <input type="text" />
            </div>
            <div className="contact-form-in">
              <label className="contact-email">
                E-Posta<span> *</span>
              </label>
              <input type="text" />
            </div>
            <div className="contact-form-in">
              <label className="contact-subj">
                Konu<span> *</span>
              </label>
              <input type="text" />
            </div>
            <div className="contact-form-in form-in-last">
              <label className="contact-comment">
                Mesaj<span> *</span>
              </label>
              <textarea className="text-area" type="text" />
            </div>

            <div className="contact-button" type="button">
              Gönder
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default TrContact;
