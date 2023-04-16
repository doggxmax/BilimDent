import { Fragment } from "react";
import "./tr-section-6.style.scss";
import { ReactComponent as Star } from "../../../../assets/star.svg";
import { ReactComponent as Google } from "../../../../assets/google.svg";
import { ReactComponent as GoogleBig } from "../../../../assets/google-big.svg";
const TrSection6 = () => {
  return (
    <Fragment>
      <section className="tr-home-section-6">
        <div className="tr-home-section-6-wrap">
          <div className="tr-home-section-6-heading">Google Yorumlar</div>
          <div className="tr-home-section-6-container">
            <div className="tr-home-section-6-google-reviews">
              <div className="tr-home-section-6-google-reviews-image">
                <img src={require("../../../../assets/user-review.jpg")} />
              </div>
              <div className="tr-home-section-6-google-reviews-container">
                <div className="tr-home-section-6-google-reviews-header">
                  BilimDent Ağız ve Diş Sağlığı Uygulama ve Araştırma Merkezi
                </div>
                <div className="tr-home-section-6-google-reviews-description">
                  <span>5.0</span>
                  <div>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
                <div className="tr-home-section-6-google-reviews-num">
                  Based on 24 reviews
                </div>
                {/* <div className="tr-home-section-6-google-powerd">
            powered by <GoogleBig />
          </div> */}
                <a
                  href="https://www.google.com/search?hl=en-TR&gl=tr&q=Tah%C4%B1lpazar%C4%B1,+BilimDent+A%C4%9F%C4%B1z+ve+Di%C5%9F+Sa%C4%9Fl%C4%B1%C4%9F%C4%B1+Uygulama+ve+Ara%C5%9Ft%C4%B1rma+Merkezi,+Kaz%C4%B1m+%C3%96zalp+Cd.+No:84+D:Kat+9,+07040+Muratpa%C5%9Fa/Antalya&ludocid=18342446249820481220&lsig=AB86z5V96OVFb6hsni-GBEE0kHAk#lrd=0x14c39168862b4aab:0xfe8d75ae883ee6c4,3"
                  style={{ textDecoration: "none", color: "#fff" }}
                  target="_"
                >
                  <div className="tr-home-section-6-google-button">
                    review us on <Google />
                  </div>
                </a>
              </div>
            </div>
            <div className="tr-home-section-6-user-reviews">
              <div className="tr-home-section-6-user-reviews-container">
                <div className="tr-home-section-6-user-reviews-wrap">
                  <div className="tr-home-section-6-user-reviews-image">
                    <img
                      height="30"
                      width="30"
                      src={require("../../../../assets/tr-1.png")}
                    />
                    <div className="tr-home-section-6-user-name">
                      <div>Cemil İrban</div>
                      <div className="tr-section-6-months">6 months ago</div>
                    </div>
                  </div>
                  <div className="tr-section-6-google-link">
                    <Google />
                  </div>
                </div>
                <div className="tr-section-6-star">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="tr-section-6-description">
                  Kesinlikle harika bir diş polikliniği.Alanında profesyonel diş
                  hekimlerinin tedavi yöntemleri o kadar konforlu ki, özellikle
                  dişçilerden korkanlar burayı kesinlikle tercih etmeli.
                </div>
              </div>
              <div className="tr-home-section-6-user-reviews-container">
                <div className="tr-home-section-6-user-reviews-wrap">
                  <div className="tr-home-section-6-user-reviews-image">
                    <img
                      height="30"
                      width="30"
                      src={require("../../../../assets/tr-2.png")}
                    />
                    <div className="tr-home-section-6-user-name">
                      <div>nalan çalık</div>
                      <div className="tr-section-6-months">7 months ago</div>
                    </div>
                  </div>
                  <div className="tr-section-6-google-link">
                    <Google />
                  </div>
                </div>
                <div className="tr-section-6-star">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="tr-section-6-description">
                  Tecrübeli doktorlara sahip, şikayetlerinize net çözümler
                  üreten bir kurum. Kapıdan içeriye girdiğinizde temizlik,ve
                  profesyonel hizmet sizi karşılıyor.Tesekkürler.
                </div>
              </div>
              <div className="tr-home-section-6-user-reviews-container">
                <div className="tr-home-section-6-user-reviews-wrap">
                  <div className="tr-home-section-6-user-reviews-image">
                    <img
                      height="30"
                      width="30"
                      src={require("../../../../assets/tr-3.png")}
                    />
                    <div className="tr-home-section-6-user-name">
                      <div>Mine Torlak</div>
                      <div className="tr-section-6-months">8 months ago</div>
                    </div>
                  </div>
                  <div className="tr-section-6-google-link">
                    <Google />
                  </div>
                </div>
                <div className="tr-section-6-star">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="tr-section-6-description">
                  Ben cok memnun kaldım şimdi Ukrayna’dan bir misafirimi
                  getirdim dişleri yapıldı o da cok memnun kaldı çalışanlar
                  doktorlar son derece kibar nazik ve sevecen misafirim adına da
                  size cok teşekkür ederim sizi tanımak cok güzeldi
                </div>
              </div>
              <div className="tr-home-section-6-user-reviews-container">
                <div className="tr-home-section-6-user-reviews-wrap">
                  <div className="tr-home-section-6-user-reviews-image">
                    <img
                      height="30"
                      width="30"
                      src={require("../../../../assets/tr-4.png")}
                    />
                    <div className="tr-home-section-6-user-name">
                      <div>fatih kirca</div>
                      <div className="tr-section-6-months">9 months ago</div>
                    </div>
                  </div>
                  <div className="tr-section-6-google-link">
                    <Google />
                  </div>
                </div>
                <div className="tr-section-6-star">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="tr-section-6-description">
                  Antalya'da diş tedavisi için gidilebilecek en güzel yer. Hem
                  hekimler hem asistanlar,tüm personel ilgili güleryüzlü ve çok
                  yardımcı. Özellikle çocuklu aileler için oyun parkının da
                  olması avantaj
                </div>
              </div>
              <div className="tr-home-section-6-user-reviews-container">
                <div className="tr-home-section-6-user-reviews-wrap">
                  <div className="tr-home-section-6-user-reviews-image">
                    <img
                      height="30"
                      width="30"
                      src={require("../../../../assets/tr-5.png")}
                    />
                    <div className="tr-home-section-6-user-name">
                      <div>Ahmet Turan</div>
                      <div className="tr-section-6-months">9 months ago</div>
                    </div>
                  </div>
                  <div className="tr-section-6-google-link">
                    <Google />
                  </div>
                </div>
                <div className="tr-section-6-star">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="tr-section-6-description">
                  Kliniğe girdiğiniz andan itibaren güler yüzlü çalışanlarla
                  karşılaşmak benim gibi dişçi fobisi olanlar için inanılmaz
                  güzeldi. Karşılamada çalışanından doktoruna kadar size daha
                  sağlıklı bir gülüşü nasıl sağlayacaklarını bilerek hizmet
                  sağlıyorlar. Bütün çalışanlara teşekkürler
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default TrSection6;
