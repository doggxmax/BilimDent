import { Fragment } from "react";
import "./tr-section-2.style.scss";
const TrSection2 = () => {
  return (
    <Fragment>
      <section className="tr-home-section-2">
        <div className="tr-home-section-2-wrapper">
          <div className="tr-home-section-2-description">
            <p>
              BilimDent Antalya’nın ilk ve tek Akademik Diş Kliniği olduğu için
              tüm ekibimiz profesyonel, deneyimli ve size sahip olmak
              istediğiniz sağlıklı gülüşü sunmaya hazırdır. Tedavinizi
              profesyonel ellere yaptırırken eşsiz Akdeniz tarihini, kültürünü
              keşfedebilir ve güzel sahillerde dinlenebilirsiniz.
            </p>
          </div>
          <div className="tr-home-section-2-adv">
            <div className="tr-adv-free"> ÜCRETSİZ </div>
            <div className="tr-adv-description">
              <div className="tr-hover-underline-animation">DANIŞMA</div>
              <div className="tr-hover-underline-animation">TEŞHİS</div>
              <div className="tr-hover-underline-animation">ULAŞIM</div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default TrSection2;
