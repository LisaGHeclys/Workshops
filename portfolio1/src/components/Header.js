import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/Logo.png";

import "../App.css";

function Header() {
  return (
    <div className="fixed flex w-full justify-center bg-white">
      <div className="w-3/4 flex items-center justify-between pt-5 content-center text-center">
        <img alt="Logo" src={Logo} />
        <FontAwesomeIcon icon={faMagnifyingGlass} size={"xl"} />
        <div className="flex space-x-2 content-center">
          <h1 className="text-xl font-regular">Menu</h1>
          <FontAwesomeIcon icon={faBarsStaggered} size={"xl"} />
        </div>
      </div>
    </div>
  );
}

export default Header;
