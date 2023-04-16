import { Fragment } from "react";
import "./section-9.style.scss";
import { useEffect, useRef } from "react";

const Section9 = () => {
  const parent = useRef();
  const topPanel = useRef();
  const handle = useRef();
  let skewHack;
  let delta;
  useEffect(() => {
    delta = 0;
    if (parent.current.className.indexOf("skewed") != -1) {
      skewHack = 1000;
    }
  });
  const rr = (e) => {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    handle.current.style.left = e.clientX + delta + "px";
    topPanel.current.style.width = e.clientX + skewHack + delta + "px";
  };
  return (
    <Fragment>
      <section className="home-section-9">
        <div className="section-9">
          <div className="section-9-logo-1">
            {/* <img src={require("../../../assets/renkli-1.png")} /> */}
          </div>
          <div className="section-9-logo-2">
            {/* <img src={require("../../../assets/renkli-2.png")} /> */}
          </div>
        </div>
        <div className="split-view">
          <div className="splitview skewed" onMouseMove={rr} ref={parent}>
            <div className="panel bottom">
              <div className="content">
                {/* <img src={require("../../../assets/teeth-left.jpg")} /> */}
              </div>
            </div>

            <div className="panel top" ref={topPanel}>
              <div className="content">
                {/* <img src={require("../../../assets/teeth-right.jpg")} /> */}
              </div>
            </div>

            <div className="handle" ref={handle}></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Section9;
