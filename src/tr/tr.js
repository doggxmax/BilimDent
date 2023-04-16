import { Route, Routes } from "react-router-dom";
import TrNavigation from "./tr-routes/tr-navigation/tr-navigation.component";
import TrHome from "./tr-routes/tr-home/tr-home.component";
import TrDigitalDentistry from "./tr-routes/tr-digital-dentistry/tr-digital-dentistry.component";
import TrAboutUs from "./tr-routes/tr-about-us/tr-about-us.component";
import TrBilimDentKids from "./tr-routes/tr-bilimdent-kids/tr-bilimdent-kids.component";
import TrBlog from "./tr-routes/tr-blog/tr-blog.component";
import TrBlogAntalya from "./tr-components/tr-blog-antalya/tr-blog-antalya.component";
import TrBlogImplants from "./tr-components/tr-blog-implants/tr-blog-implants.component";
import TrContact from "./tr-routes/tr-contact/tr-contact.component";

const TR = () => {
  return (
    <Routes>
      <Route path="/" element={<TrNavigation />}>
        <Route index element={<TrHome />} />
        <Route
          path="/dijital-dis-hekimligi"
          element={<TrDigitalDentistry />}
        ></Route>
        <Route path="/bilimdent-cocuk" element={<TrBilimDentKids />}></Route>
        <Route path="hakkimizda" element={<TrAboutUs />} />
        <Route path="/blog" element={<TrBlog />}></Route>
        <Route path="/blog/antalya-tr-2" element={<TrBlogAntalya />}></Route>
        <Route
          path="/blog/dis-implantlari-sonrasi-bakim"
          element={<TrBlogImplants />}
        ></Route>
        <Route path="/iletisim" element={<TrContact />} />
      </Route>
      {/* <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/bilimdent-kids" element={<BilimDentKids />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/antalya" element={<BlogAntalya />}></Route>
        <Route
          path="/blog/dental-implants-aftercare"
          element={<BlogImplants />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route> */}
      {/* </Route> */}
    </Routes>
  );
};
export default TR;
