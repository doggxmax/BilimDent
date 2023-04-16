import "./home.style.scss";

import Section1 from "../../en-components/home-sections/section-1/section-1.component";
import Section2 from "../../en-components/home-sections/section-2/section-2.component";
import Section3 from "../../en-components/home-sections/section-3/section-3.component";
import Section4 from "../../en-components/home-sections/section-4/section-4.component";
import Section5 from "../../en-components/home-sections/section-5/section-5.component";
import Section6 from "../../en-components/home-sections/section-6/section-6.component";
import Section8 from "../../en-components/home-sections/section-8/section-8.component";
import Section7 from "../../en-components/home-sections/section-7/section-7.component";
import Section9 from "../../en-components/home-sections/section-9/section-9.component";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth" }, 0, 0);
  });
  return (
    <div className="home">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
};
export default Home;
