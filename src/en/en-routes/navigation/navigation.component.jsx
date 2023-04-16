import { Outlet } from "react-router-dom";
import "./navigation.style.scss";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./../../en-components/footer/footer.component";
import HomeIcons from "../../en-components/home-icons/home-icons.component";
const Navigation = () => {
  const navOpenRef = useRef();
  const btnOpenClose = (e) => {
    if (navOpenRef.current?.classList[1]) {
      navOpenRef.current.classList.remove("nav-open");
    } else {
      navOpenRef.current.classList.add("nav-open");
    }
  };
  const navLinks = (e) => {
    if (e.target.className === "nav-link") {
      if (navOpenRef.current?.classList[1] === "nav-open") {
        navOpenRef.current?.classList.remove("nav-open");
      }
    }
  };
  useEffect(() => {});
  return (
    <Fragment>
      <div className="nav nav-open" ref={navOpenRef}>
        <Link to="/">
          <div className="nav-logo">
            {/* <img src={require("../../../assets/Varlik-4.png")} /> */}
          </div>
        </Link>
        <nav className="main-nav">
          <div className="nav-links" onClick={navLinks}>
            <Link to="/">
              <div className="nav-link">Home</div>
            </Link>
            <Link to="/about-us">
              <div className="nav-link">About Us</div>
            </Link>
            <Link to="/bilimdent-kids">
              <div className="nav-link">Bilimdent Kids</div>
            </Link>
            <Link to="/digital-dentistry">
              <div className="nav-link">Digital Dentistry</div>
            </Link>
            <Link to="/blog">
              <div className="nav-link" id="blog">
                Blog
              </div>
            </Link>
            <Link to="/contact">
              <div className="nav-link">Contact</div>
            </Link>
            <Link to="/tr">
              <div className="nav-link tr" style={{ color: "#ba9e66" }}>
                TR
              </div>
            </Link>
          </div>
        </nav>
        <div className="home-i">
          <HomeIcons />
        </div>
        <button className="btn-mobile-nav" onClick={btnOpenClose}>
          <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  );
};
export default Navigation;
