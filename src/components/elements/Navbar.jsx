import React from "react";
import NavCss from "../../css/navbar.module.css";
import {Link} from 'react-router-dom';
import { GiTakeMyMoney } from "react-icons/gi";

function Navbar() {
  return (
    <nav className={NavCss.nav_container}>
      <div className={NavCss.nav_icon}>
        <span>DamzxyFx</span>
        <GiTakeMyMoney size="3rem" />
      </div>
      <ui class={NavCss.menus}>
        <li>
          <Link to="" className={NavCss.menu_link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="" className={NavCss.menu_link}>
            About-Us
          </Link>
          </li>
        <li>
          <Link to="" className={NavCss.menu_link}>
            Contact
          </Link>
        </li>
      </ui>
    </nav>
  );
}

export default Navbar;
