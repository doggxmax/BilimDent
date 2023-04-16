import { Fragment } from "react";
import { ReactComponent as Checkbox } from "../../../../assets/checkbox.svg";
import "./section-3.style.scss";
import { useNavigate } from "react-router-dom";

const Section3 = () => {
  const navigate = useNavigate();
  const onGetInfoHandler = () => {
    navigate("/contact");
  };
  return (
    <Fragment>
      <section className="home-section-3">
        <div className="home-section-3-wrap">
          <div className="section-3-image-container">
            <img
              width="500"
              height="610"
              src={require("../../../../assets/bilimdent-dentists.jpg")}
            />
          </div>
          <div className="section-3-description">
            <h2 className="section-3-heading">Our Services</h2>
            <div className="section-3-list">
              <div>
                <li>
                  <Checkbox />
                  Pedodontics
                </li>
                <li>
                  <Checkbox />
                  Digital Dentistry
                </li>
                <li>
                  <Checkbox />
                  Endodontics
                </li>
                <li>
                  <Checkbox />
                  Restorative Dentistry
                </li>
                <li>
                  <Checkbox />
                  Jaw Joint
                </li>
                <li>
                  <Checkbox />
                  Implantology
                </li>
              </div>
              <div>
                <li>
                  <Checkbox />
                  Teeth Whitening
                </li>
                <li>
                  <Checkbox />
                  Laminate Veneer
                </li>
                <li>
                  <Checkbox />
                  Aesthetic Dentistry
                </li>
                <li>
                  <Checkbox />
                  Pink Aesthetics
                </li>
                <li>
                  <Checkbox />
                  Smile Design
                </li>
                <li>
                  <Checkbox />
                  Orthodontics
                </li>
              </div>
            </div>
            <div className="section-3-info-button" onClick={onGetInfoHandler}>
              Get Information
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Section3;
