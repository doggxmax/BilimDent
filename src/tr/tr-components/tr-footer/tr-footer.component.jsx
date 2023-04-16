import { Fragment, useEffect, useRef } from "react";
import "./tr-footer.style.scss";
import TrHomeIcons from "../tr-home-icons/tr-home-icons.component";
import { Link, useLocation } from "react-router-dom";
const TrFooter = () => {
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
      <footer className="tr-footer">
        <div className="tr-footer-container">
          <div className="tr-footer-wrap">
            <h3 className="tr-footer-heading">Amaç ve Hedef</h3>
            <div className="tr-footer-description-1">
              Ana amacımız, Ağız Diş Tedavisi, Protez Diş Hekimliği, Pedodonti,
              Endodonti, Ortodonti, Periodontoloji, Ağız, Diş ve Çene Cerrahisi
              ve Restoratif Diş tedavilerini kurumumuzun kliniklerinde en ileri
              teknolojileri kullanarak gerçekleştirmektir.
            </div>
          </div>
          <div className="tr-footer-wrap">
            <h3 className="tr-footer-heading">Hızlı Erişim</h3>
            <div className="tr-footer-description-2" ref={footerRef}>
              <Link to="/tr">
                <div id="/tr">Anasayfa</div>
              </Link>
              <Link to="/tr/hakkimizda">
                <div id="/tr/hakkimizda">Hakkımızda</div>
              </Link>
              <Link to="/tr/bilimdent-cocuk">
                <div id="/tr/bilimdent-cocuk">Bilimdent Çocuk</div>
              </Link>
              <Link to="/tr/dijital-dis-hekimligi">
                <div id="/tr/dijital-dis-hekimligi">Digital Diş Hekimliği</div>
              </Link>
              <Link to="/tr/blog">
                <div id="/tr/blog">Blog</div>
              </Link>
              <Link to="/tr/iletisim">
                <div id="/tr/iletisim">İletişim</div>
              </Link>
              <Link to="/">
                <div style={{ color: "#ba9e66" }}>EN</div>
              </Link>
            </div>
          </div>
          <div className="tr-footer-wrap">
            <h3 className="tr-footer-heading">Adres</h3>
            <div className="tr-footer-description-3">
              Tahılpazarı Mahallesi, Kazım Özalp Cd. No 84 D:Floor 9, 07040
              Muratpasa/Antalya
            </div>
          </div>
          <div className="tr-footer-wrap">
            <h3 className="tr-footer-heading">İletişim</h3>
            <div className="tr-footer-desc">
              <div className="tr-footer-desc-info">
                <h4>Eposta</h4>
                <div>bilimdent@antalya.edu.tr</div>
              </div>
              <div className="tr-footer-desc-info">
                <h4>Telefon</h4>
                <div>+90 242 245 00 11</div>
              </div>
              <div className="tr-footer-desc-info">
                <h4>Telefon</h4>
                <div>+90 544 245 00 91</div>
              </div>
            </div>
            <div className="tr-footer-icons">
              <TrHomeIcons />
            </div>
          </div>
        </div>
        <div className="tr-copyrights">
          Copyright ©2022 bilimdent.com | Tüm Hakları Saklıdır
        </div>
        <div className="tr-footer-foot">
          <div className="tr-footer-foot-container">
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
            <div className="tr-footer-by">BY</div>
            <div>
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
export default TrFooter;
