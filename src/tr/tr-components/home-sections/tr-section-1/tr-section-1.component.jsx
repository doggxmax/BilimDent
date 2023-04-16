import { Fragment } from "react";
import "./tr-section-1.style.scss";
import { Link } from "react-router-dom";
const TrSection1 = () => {
  return (
    <Fragment>
      <div className="need">
        <section className="tr-home-section-1">
          {/* <div className="tr-home-icons">
        <tr-HomeIcons />
      </div> */}
          <div className="tr-home-header">
            <div className="tr-home-header-slogan">
              <span className="tr-home-header-name">
                BİLİM<span style={{ color: "#ba9e66" }}>DENT</span>
              </span>
              <br />
              <span className="tr-home-header-name-2">
                {/* ile bilimsel gülümseyin */}
                İLE BİLİMSEL
              </span>
              <span className="tr-home-header-name-3">GÜLÜMSEYİN</span>
            </div>
            <div className="tr-home-header-small">
              En az 10 yıl mesleki tecrübe
            </div>
            <a target="_" href="https://bilimdentrandevu.antalya.edu.tr/">
              <div className="tr-home-button">Online Randevu</div>
            </a>
          </div>

          <div className="tr-home-container">
            <div className="tr-home-image-2">
              <img
                width="600px"
                height="500px"
                src={require("../../../../assets/bilimdent3.jpg")}
              />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
export default TrSection1;
