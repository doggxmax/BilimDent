import { ReactComponent as Facebook } from "../../../assets/facebook.svg";
import { ReactComponent as Twitter } from "../../../assets/twitter.svg";
import { ReactComponent as Instagram } from "../../../assets/instagram.svg";
import { ReactComponent as WHATSAPP } from "../../../assets/whatsapp.svg";
import "./tr-home-icons.style.scss";
const TrHomeIcons = () => {
  return (
    <div className="tr-homeicons">
      <a href="https://www.facebook.com/abuBilimdent/" target="_">
        <li>
          <Facebook />
        </li>
      </a>
      <a href="https://mobile.twitter.com/bilimdent" target="_">
        <li>
          <Twitter />
        </li>
      </a>
      <a href="https://api.whatsapp.com/send?phone=905442450091" target="_">
        <li>
          <WHATSAPP />
        </li>
      </a>
      <a href="https://www.instagram.com/bilimdent/" target="_">
        <li>
          <Instagram />
        </li>
      </a>
    </div>
  );
};
export default TrHomeIcons;
