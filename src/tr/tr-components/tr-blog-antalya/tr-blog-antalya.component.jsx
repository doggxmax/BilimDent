import { Fragment, useEffect } from "react";
import "./tr-blog-antalya.style.scss";
const TrBlogAntalya = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="blog-antalya">
        <div className="blog-antalya-heading">
          <h1 className="blog-antalya-header">Antalya</h1>
        </div>
        <div className="blog-antalya-container">
          <div className="blog-antalya-image-container">
            <img
              width="540"
              height="487"
              src={require("../../../assets/antalya-1.jpg")}
            />
          </div>
          <div className="blog-antalya-description-container">
            <div className="blog-antalya-description">
              <h2>Antalya sağlık turizminde</h2>
              <p>
                Antalya, dünyaca ünlü destinasyonları ile Akdeniz'in doğası,
                tarihi, eşsiz ve güneşli kıyıları ile iç içedir. Avrupa'dan
                sadece birkaç saat içinde muhteşem Akdeniz tarihi, kültürü,
                alışveriş avantajlarına ulaşabilirsiniz. Sadece diş
                tedavilerinde uygun fiyatlar için değil, aynı zamanda coğrafi ve
                tarihi zenginliklere sahip güzel turistik noktalar için.
              </p>
            </div>
            <div className="blog-antalya-description">
              <h2>Sağlık turizminde BilimDent</h2>
              <p>
                BilimDent'in amacı, sağlık sektöründe profesyonel bir
                organizasyon aracılığıyla hastaların tedavi amacıyla sağlık
                turizminde en kaliteli hizmeti, akademik ve güvenilir bir
                şekilde sorunsuz bir şekilde almalarını sağlamaktır. Bilimdent
                size sağlıklı ve bilimsel gülüşler sunar.
              </p>
            </div>
          </div>
        </div>
        <div className="blog-antalya-image-con">
          <div className="blog-antalya-image">
            <img
              width="540"
              height="487"
              src={require("../../../assets/antalya-2.jpg")}
            />
          </div>
          <div className="blog-antalya-image">
            <img
              width="535"
              height="487"
              src={require("../../../assets/antalya-3.jpg")}
            />
          </div>
        </div>
        <div className="blog-antalya-video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3n9z3DffaYs?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
};
export default TrBlogAntalya;
