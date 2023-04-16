import { Routes, Route } from "react-router-dom";
import Navigation from "./en-routes/navigation/navigation.component";
import Home from "./en-routes/home/home.component";
import BilimDentKids from "./en-routes/bilimdent-kids/bilimdent-kids.component";
import DigitalDentistry from "./en-routes/digital-dentistry/digital-dentistry.component";
import AboutUs from "./en-routes/about-us/about-us.component";
import Blog from "./en-routes/blog/blog.component";
import Contact from "./en-routes/contact/contact.component";
import BlogAntalya from "./en-components/blog-antalya/blog-antalya.component";
import BlogImplants from "./en-components/blog-implants/blog-implants.component";
import TR from "../tr/tr";
const EN = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/bilimdent-kids" element={<BilimDentKids />}></Route>
        <Route path="/digital-dentistry" element={<DigitalDentistry />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/antalya" element={<BlogAntalya />}></Route>
        <Route
          path="/blog/dental-implants-aftercare"
          element={<BlogImplants />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
    </Routes>
  );
};
export default EN;
