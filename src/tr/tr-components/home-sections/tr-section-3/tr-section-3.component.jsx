import { Fragment } from "react";
import { ReactComponent as Checkbox } from "../../../../assets/checkbox.svg";
import "./tr-section-3.style.scss";
import { useNavigate } from "react-router-dom";

const TrSection3 = () => {
  const navigate = useNavigate();
  const onGetInfoHandler = () => {
    navigate("tr/contact");
  };
  return (
    <Fragment>
      <section className="tr-home-section-3">
        <div className="tr-home-section-3-wrap">
          <div className="tr-section-3-image-container">
            <img
              width="500"
              height="610"
              src={require("../../../../assets/bilimdent-dentists.jpg")}
            />
          </div>
          <div className="tr-section-3-description">
            <h2 className="tr-section-3-heading">Hizmetlerimiz</h2>
            <div className="tr-section-3-list">
              <div>
                <li>
                  <Checkbox />
                  Pedodonti
                </li>
                <li>
                  <Checkbox />
                  Dijital Diş Hekimliği
                </li>
                <li>
                  <Checkbox />
                  Endodonti
                </li>
                <li>
                  <Checkbox />
                  Restoratif Detistry
                </li>
                <li>
                  <Checkbox />
                  Çene Eklemi
                </li>
                <li>
                  <Checkbox />
                  İmplantoloji
                </li>
              </div>
              <div>
                <li>
                  <Checkbox />
                  Diş beyazlatma
                </li>
                <li>
                  <Checkbox />
                  Laminat Kaplama
                </li>
                <li>
                  <Checkbox />
                  Estetik Diş Hekimliği
                </li>
                <li>
                  <Checkbox />
                  Pembe Estetik
                </li>
                <li>
                  <Checkbox />
                  Gülüş Tasarımı
                </li>
                <li>
                  <Checkbox />
                  Ortodonti
                </li>
              </div>
            </div>
            <div
              className="tr-section-3-info-button"
              onClick={onGetInfoHandler}
            >
              BİLGİ AL
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default TrSection3;
