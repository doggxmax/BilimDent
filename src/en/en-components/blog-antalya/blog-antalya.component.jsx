import { Fragment, useEffect } from "react";
import "./blog-antalya.style.scss";
const BlogAntalya = () => {
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
          <div className="blog-antalya-image">
            <img
              width="540"
              height="487"
              src={require("../../../assets/antalya-1.jpg")}
            />
          </div>
          <div className="blog-antalya-description-container">
            <div className="blog-antalya-description">
              <h2>Antalya in health tourism</h2>
              <p>
                Antalya is in touch with nature, history, uniqe and sunny
                coastlines of the Mediterranen with world-famous destinations.
                Just a few hours from Europe you able to reach to magnificent
                Mediterranean history, culture, shopping advantages. Not only
                for affordable prices in dental treatments, but also for
                beautiful touristic spots with geographical and historical
                riches.
              </p>
            </div>
            <div className="blog-antalya-description">
              <h2>BilimDent in health tourism</h2>
              <p>
                The aim of BilimDent is to ensure that the patients receive the
                highest quality services without any problems on their health
                tourism for the purpose of treatment in a academic and reliable
                way through a professional organization within the health
                sector. Bilimdent provides you healthy and radiant smiles
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
export default BlogAntalya;
