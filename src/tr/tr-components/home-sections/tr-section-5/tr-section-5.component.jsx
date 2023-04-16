import { Fragment, useEffect, useRef } from "react";
import "./tr-section-5.style.scss";
import { ReactComponent as Check } from "../../../../assets/check-1.svg";

const TrSection5 = () => {
  return (
    <Fragment>
      <section className="tr-home-section-5">
        <div className="tr-home-section-5-wrap">
          <div className="tr-home-section-5-container">
            <div className="tr-home-section-5-header">
              <span className="tr-home-section-5-smallh">Sizi</span>
              <span className="tr-home-section-5-heading">
                BİLİM<span className="">DENT</span>'TE
              </span>
              <span className="tr-home-section-5-smalh">ne bekliyor?</span>
            </div>
            <div className="tr-home-section-5-list">
              <li>
                <Check />
                Merkezi Konumu
              </li>
              <li>
                <Check />
                Birinci Sınıf ve Yüksek Teknoloji Hizmeti
              </li>
              <li>
                <Check />
                Panaromik Röntgen
              </li>
              <li>
                <Check />
                Hacimsel Tomograf
              </li>
              <li>
                <Check />
                'A' Sınıfı Malzemeler
              </li>
              <li>
                <Check />
                Hijyen Konusunda En Yüksek Standartlar
              </li>
              <li>
                <Check />
                Tüm Tedavilerde Uzun Süreli Garanti
              </li>
            </div>
          </div>

          <div className="tr-home-section-5-image-container">
            <img
              width="600px"
              height="500px"
              src={require("../../../../assets/gallery-2.jpg")}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default TrSection5;
