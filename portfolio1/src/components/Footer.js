import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faLinkedin,
  faBehance,
  faTwitter,
  faDribbble
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";

function Footer() {
  return (
    <div className="flex w-full justify-center bg-white">
      <div className="w-3/4 flex items-center justify-between pb-5 content-center text-center">
        <h1>&copy; 2023 Ozart Portfolio Template</h1>
        <div className="flex space-x-20">
          <FontAwesomeIcon icon={faSquareFacebook} size={"lg"} />
          <FontAwesomeIcon icon={faLinkedin} size={"lg"} />
          <FontAwesomeIcon icon={faBehance} size={"lg"} />
          <FontAwesomeIcon icon={faTwitter} size={"lg"} />
          <FontAwesomeIcon icon={faDribbble} size={"lg"} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
