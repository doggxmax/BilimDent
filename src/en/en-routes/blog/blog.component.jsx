import { Fragment, useEffect } from "react";
import "./blog.style.scss";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ behavior: "smooth" }, 0, 0);
  });
  const goToAntalya = () => {
    navigate("antalya");
  };
  const goToImplants = () => {
    navigate("dental-implants-aftercare");
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
                Antalya is in touch with nature, history, uniqe and sunny
                coastlines of the Mediterranen with world-famous destinations.
                Just a few hours from Europe you able to reach to magnificent
                Mediterranean history, culture, shopping advantages.
              </p>
            </div>
          </div>
          <div className="blog-content" onClick={goToImplants}>
            <div className="blog-content-image">
              <img src={require("../../../assets/implant.jpg")} />
            </div>
            <div className="blog-content-header">
              <div>Dental Implants Aftercare</div>
              <p>
                It is possible to have some pain after your treatment is
                completed; however it is not a problem as your mouth might be
                sore. As you are prescribed with pain killers or antibiotics,
                please pay attention to use them regularly as they help you deal
                with the pain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Blog;
