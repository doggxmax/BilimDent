import "./tr-navigation.style.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Fragment } from "react";
import TrHomeIcons from "../../tr-components/tr-home-icons/tr-home-icons.component";
import TrFooter from "../../tr-components/tr-footer/tr-footer.component";
const TrNavigation = () => {
  return (
    <Fragment>
      <nav className="tr-nav">
        <div className="tr-nav-logo">
          <Link to="/tr">
            <img
              width="90px"
              height="80px"
              src={require("../../../assets/Varlik-4.png")}
            />
          </Link>
        </div>

        <div className="tr-nav-links">
          <Link to="/tr/hakkimizda">
            <div className="tr-nav-link">Hakkımızda</div>
          </Link>
          <Link to="/tr/bilimdent-cocuk">
            <div className="tr-nav-link">Bilimdent Çocuk</div>
          </Link>
          <Link to="/tr/dijital-dis-hekimligi">
            <div className="tr-nav-link">Digital Diş Hekimliği</div>
          </Link>
          <Link to="/tr/blog">
            <div className="tr-nav-link" id="blog">
              Blog
            </div>
          </Link>
          <Link to="/tr/iletisim">
            <div className="tr-nav-link">İletişim</div>
          </Link>
          <Link to="/">
            <div className="tr-nav-link tr" style={{ color: "#ba9e66" }}>
              EN
            </div>
          </Link>
        </div>
        <div className="tr-home-i">
          <TrHomeIcons />
        </div>
      </nav>
      <Outlet />
      <TrFooter />
    </Fragment>
  );
};
export default TrNavigation;
