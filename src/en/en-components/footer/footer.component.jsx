import { Fragment, useEffect, useRef } from "react";
import "./footer.style.scss";
import HomeIcons from "../../en-components/home-icons/home-icons.component";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const footerRef = useRef();
  const loc = useLocation();
  useEffect(() => {
    footerRef.current?.childNodes.forEach((foot) => {
      if (foot.pathname === loc.pathname) {
        foot.style = "color: #ba9e66";
      } else {
        foot.style = "color: #fff";
      }
    });
  }, [loc]);
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-wrap">
            <h3 className="footer-heading">Purpose And Mission</h3>
            <div className="footer-description-1">
              Our main aim is to perform Oral Diagnosis, Prosthetic Dentistry,
              Pedodontics, Endodontics, Orthodontics, Periodontology, Oral and
              Maxillofacial Surgery and Restorative Dental treatments by using
              the most advanced technologies in the clinics of our institution.
            </div>
          </div>
          <div className="footer-wrap">
            <h3 className="footer-heading">Fast Access</h3>
            <div className="footer-description-2" ref={footerRef}>
              <Link to="/">
                <div>Home</div>
              </Link>
              <Link to="/about-us">
                <div>About us</div>
              </Link>
              <Link to="/bilimdent-kids">
                <div>BilimDent Kids</div>
              </Link>
              <Link to="/digital-dentistry">
                <div>Digital Dentistry</div>
              </Link>
              <Link to="/blog">
                <div>Blog</div>
              </Link>
              <Link to="/contact">
                <div>Contact</div>
              </Link>
              <Link to="/tr">
                <div style={{ color: "#ba9e66" }}>TR</div>
              </Link>
            </div>
          </div>
          <div className="footer-wrap">
            <h3 className="footer-heading">Adress</h3>
            <div className="footer-description-3">
              Tahılpazarı Mahallesi, Kazım Özalp Cd. No 84 D:Floor 9, 07040
              Muratpasa/Antalya
            </div>
          </div>
          <div className="footer-wrap">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-desc">
              <div className="footer-desc-info">
                <h4>Email</h4>
                <div>bilimdent@antalya.edu.tr</div>
              </div>
              <div className="footer-desc-info">
                <h4>Phone</h4>
                <div>+90 242 245 00 11</div>
              </div>
              <div className="footer-desc-info">
                <h4>Phone</h4>
                <div>+90 544 245 00 91</div>
              </div>
            </div>
            <div className="footer-icons">
              <HomeIcons />
            </div>
          </div>
        </div>
        <div className="copyrights">
          Copyright ©2022 bilimdent.com | Tüm Hakları Saklıdır
        </div>
        <div className="footer-foot">
          <div className="footer-foot-container">
            <div>
              <img
                height="64px"
                width="78px"
                src={require("../../../assets/renkli-1.png")}
              />
            </div>
            <div>
              <img
                height="64px"
                width="78px"
                src={require("../../../assets/renkli-2.png")}
              />
            </div>
            <div className="footer-by">BY</div>
            <div className="iimm">
              <a href="https://antalya.edu.tr/en" target="_">
                <img
                  height="51px"
                  width="240px"
                  src={require("../../../assets/uni-logo.png")}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
export default Footer;
