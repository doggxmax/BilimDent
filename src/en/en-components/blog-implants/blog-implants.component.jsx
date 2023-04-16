import { Fragment, useEffect } from "react";
import "./blog-implants.style.scss";
import { ReactComponent as Check } from "../../../assets/check-1.svg";
const BlogImplants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="dental-implants">
        <h1 className="dental-implants-header">DENTAL IMPLANTS AFTERCARE</h1>
        <div className="dental-implants-wrap">
          <div className="dental-implants-image-container">
            <img src={require("../../../assets/implant.jpg")} />
          </div>
          <div className="dental-implants-container">
            <h3>Dental Implants Aftercare</h3>
            <p>
              It is possible to have some pain after your treatment is
              completed; however it is not a problem as your mouth might be
              sore. As you are prescribed with pain killers or antibiotics,
              please pay attention to use them regularly as they help you deal
              with the pain.
            </p>
            <p>
              After your treatment with Dental Implants is completed, it is
              important to apply ice on the surgery area either in the form of a
              pack or ice cubes covered in clean cloth as much as possible for
              the first 24 hours as this will prevent from swelling and help you
              in the healing.
            </p>
            <p>
              Water with salt is also very helpful for the healing period,
              especially for the first week so please put a teaspoon of salt
              into a cup of warm water and gargle as much as you can.
            </p>
            <p>
              Brushing your teeth for the first week may be hard for you so
              drinking water will help you keep your mouth clean. After the
              first week, you can use a mouthwash. As the mouth heals very fast,
              when your mouth is back to normal, you can brush your teeth again.
            </p>
          </div>
        </div>

        <div className="dental-implants-desc">
          <div>
            {/* <Check /> */}
            <p>
              In the first 24 hours, please avoid sunlight directly as it may
              increase the level of swelling.
            </p>
          </div>
          <div>
            {/* <Check /> */}
            <p>Hot shower should also be avoided for the 24 hours.</p>
          </div>
          <div>
            {/* <Check /> */}
            <p>
              Avoid sea and swimming pool as the water may cause an infection.
            </p>
          </div>
          <div>
            {/* <Check /> */}
            <p>
              Please do not drink too hot or too cold drinks for the first 48
              hours as might make you feel sensitivity.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BlogImplants;
