import { Fragment, useEffect } from "react";
import "./tr-blog.style.scss";
import { useNavigate } from "react-router-dom";
const TrBlog = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ behavior: "smooth" }, 0, 0);
  });
  const goToAntalya = () => {
    navigate("antalya-tr-2");
  };
  const goToImplants = () => {
    navigate("dis-implantlari-sonrasi-bakim");
  };
  return (
    <Fragment>
      <div className="blog">
        <div className="blog-header">
          <div>Blog</div>
        </div>
        <div className="blog-wrap">
          <div className="blog-content" onClick={goToAntalya}>
            <div className="blog-content-image">
              <img src={require("../../../assets/antalya-1.jpg")} />
            </div>
            <div className="blog-content-header">
              <div>Antalya</div>
              <p>
                Antalya, dünyaca ünlü destinasyonları ile Akdeniz'in doğası,
                tarihi, eşsiz ve güneşli kıyıları ile iç içedir. Avrupa'dan
                sadece birkaç saat içinde muhteşem Akdeniz tarihi, kültürü,
                alışveriş avantajlarına ulaşabilirsiniz. Sadece diş
                tedavilerinde uygun fiyatlar için değil, aynı zamanda coğrafi ve
                tarihi zenginliklere sahip güzel turistik noktalar için.
              </p>
            </div>
          </div>
          <div className="blog-content" onClick={goToImplants}>
            <div className="blog-content-image">
              <img src={require("../../../assets/implant.jpg")} />
            </div>
            <div className="blog-content-header">
              <div>Diş İmplantları Sonrası Bakım</div>
              <p>
                Tedaviniz tamamlandıktan sonra biraz ağrınız olabilir; Ancak
                ağzınız ağrıyabileceği için sorun olmaz. Size ağrı kesiciler
                veya antibiyotikler reçete edildiğinden, ağrıyla başa çıkmanıza
                yardımcı oldukları için bunları düzenli olarak kullanmaya lütfen
                dikkat edin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TrBlog;
