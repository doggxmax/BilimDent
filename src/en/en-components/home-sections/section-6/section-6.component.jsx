import { Fragment } from "react";
import "./section-6.style.scss";
import { ReactComponent as Star } from "../../../../assets/star.svg";
import { ReactComponent as Google } from "../../../../assets/google.svg";
import { ReactComponent as GoogleBig } from "../../../../assets/google-big.svg";
const Section6 = () => {
  return (
    <Fragment>
      <section className="home-section-6">
        <div className="home-section-6-wrap">
          <div className="home-section-6-heading">Google Reviews</div>
          <div className="home-section-6-container">
            <div className="home-section-6-google-reviews">
              <div className="home-section-6-google-reviews-image">
                <img src={require("../../../../assets/user-review.jpg")} />
              </div>
              <div className="home-section-6-google-reviews-container">
                <div className="home-section-6-google-reviews-header">
                  BilimDent Ağız ve Diş Sağlığı Uygulama ve Araştırma Merkezi
                </div>
                <div className="home-section-6-google-reviews-description">
                  <span>5.0</span>
                  <div>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
                <div className="home-section-6-google-reviews-num">
                  Based on 24 reviews
                </div>
                {/* <div className="home-section-6-google-powerd">
            powered by <GoogleBig />
          </div> */}
                <a
                  href="https://www.google.com/search?hl=en-TR&gl=tr&q=Tah%C4%B1lpazar%C4%B1,+BilimDent+A%C4%9F%C4%B1z+ve+Di%C5%9F+Sa%C4%9Fl%C4%B1%C4%9F%C4%B1+Uygulama+ve+Ara%C5%9Ft%C4%B1rma+Merkezi,+Kaz%C4%B1m+%C3%96zalp+Cd.+No:84+D:Kat+9,+07040+Muratpa%C5%9Fa/Antalya&ludocid=18342446249820481220&lsig=AB86z5V96OVFb6hsni-GBEE0kHAk#lrd=0x14c39168862b4aab:0xfe8d75ae883ee6c4,3"
                  style={{ textDecoration: "none", color: "#fff" }}
                  target="_"
                >
                  <div className="home-section-6-google-button">
                    review us on <Google />
                  </div>
                </a>
              </div>
            </div>
            <div className="home-section-6-user-reviews">
              <div className="home-section-6-user-reviews-container">
                <div className="home-section-6-user-reviews-wrap">
                  <div className="home-section-6-user-reviews-image">
                    <img
                      height="30"
                      width="30"
                      src={require("../../../../assets/user-1.png")}
                    />
                    <div className="home-section-6-user-name">
                      <div>Fadzaishe Kaseke</div>
                      <div className="section-6-months">6 months ago</div>
                    </div>
                  </div>
                  <div className="section-6-google-link">
                    <Google />
                  </div>
                </div>
                <div className="section-6-star">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="section-6-description">
                  Amazing experience !❤️
                </div>
              </div>
              <div className="home-section-6-user-reviews-container">
                <div className="home-section-6-user-reviews-wrap">
                  <div className="home-section-6-user-reviews-image">
                    <img
                      height="30"
                      width="30"
                      src={require("../../../../assets/user-2.png")}
                    />
                    <div className="home-section-6-user-name">
                      <div>Ahmed Said</div>
                      <div className="section-6-months">7 months ago</div>
                    </div>
                  </div>
                  <div className="section-6-google-link">
                    <Google />
                  </div>
                </div>
                <div className="section-6-star">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="section-6-description">
                  Great experience, Selbin was great for translating and was
                  very helpful at the clinic. Doctors knew exactly what i needed
                  and was given the required treatment right away
                </div>
              </div>
              <div className="home-section-6-user-reviews-container">
                <div className="home-section-6-user-reviews-wrap">
                  <div className="home-section-6-user-reviews-image">
                    <img
                      height="30"
                      width="30"
                      src={require("../../../../assets/user-3.png")}
                    />
                    <div className="home-section-6-user-name">
                      <div>Zahra S</div>
                      <div className="section-6-months">7 months ago</div>
                    </div>
                  </div>
                  <div className="section-6-google-link">
                    <Google />
                  </div>
                </div>
                <div className="section-6-star">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="section-6-description">
                  Amazing service - thanks to SELBIN! I came in for a
                  consultation and was treated the following day - I had a canal
                  & filling treatment. Again I’d like to thank Selbin
                  specifically for being so so kind & helpful
                </div>
              </div>
              <div className="home-section-6-user-reviews-container">
                <div className="home-section-6-user-reviews-wrap">
                  <div className="home-section-6-user-reviews-image">
                    <img
                      height="30"
                      width="30"
                      src={require("../../../../assets/user-4.png")}
                    />
                    <div className="home-section-6-user-name">
                      <div>Rasha Rasha</div>
                      <div className="section-6-months">7 months ago</div>
                    </div>
                  </div>
                  <div className="section-6-google-link">
                    <Google />
                  </div>
                </div>
                <div className="section-6-star">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="section-6-description">
                  Very helpful, was treated immediately and was provided with
                  great service thanks to Selbin - she was extremely kind and
                  friendly!
                </div>
              </div>
              <div className="home-section-6-user-reviews-container">
                <div className="home-section-6-user-reviews-wrap">
                  <div className="home-section-6-user-reviews-image">
                    <img
                      height="30"
                      width="30"
                      src={require("../../../../assets/user-5.png")}
                    />
                    <div className="home-section-6-user-name">
                      <div>Safwan Zaheer</div>
                      <div className="section-6-months">7 months ago</div>
                    </div>
                  </div>
                  <div className="section-6-google-link">
                    <Google />
                  </div>
                </div>
                <div className="section-6-star">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="section-6-description">
                  We weren't in Antalya for long and didn't speak Turkish so we
                  were a bit worried but Selbin made everything quite easy. She
                  was very accommodating and her English was great. The dentists
                  and dental nurses were very nice as well. An entirely positive
                  experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Section6;
