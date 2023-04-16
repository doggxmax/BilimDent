import { Fragment, useEffect } from "react";
import "./tr-home.style.scss";
import TrSection1 from "../../tr-components/home-sections/tr-section-1/tr-section-1.component";
import TrSection2 from "../../tr-components/home-sections/tr-section-2/tr-section-2.component";
import TrSection3 from "../../tr-components/home-sections/tr-section-3/tr-section-3.component";
import TrSection4 from "../../tr-components/home-sections/tr-section-4/tr-section-4.component";
import TrSection5 from "../../tr-components/home-sections/tr-section-5/tr-section-5.component";
import TrSection6 from "../../tr-components/home-sections/tr-section-6/tr-section-6.component";
import TrSection7 from "../../tr-components/home-sections/tr-section-7/tr-section-7.component";
import TrSection8 from "../../tr-components/home-sections/tr-section-8/tr-section-8.component";
import { useLocation } from "react-router-dom";
const TrHome = () => {
  const loc = useLocation();
  console.log(loc);
  useEffect(() => {
    window.scrollTo({ behavior: "smooth" }, 0, 0);
  });
  return (
    <Fragment>
      <TrSection1 />
      <TrSection2 />
      <TrSection3 />
      <TrSection4 />
      <TrSection5 />
      <TrSection6 />
      <TrSection7 />
      <TrSection8 />
    </Fragment>
  );
};
export default TrHome;
