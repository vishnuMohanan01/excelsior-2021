import React, { useState } from "react"
import * as headerMBStyles from "./headerMB.module.css";
import { StaticImage } from "gatsby-plugin-image"

import headerEx from "../../images/mb/header-ex-logo.svg";
import hamburgerButton from "../../images/mb/hamburger-blue.svg";


const HeaderNavBarMB = ({setSideNavBarStatus}) => {

  return (
    <div className={`${headerMBStyles.mobileVersion} ${headerMBStyles.container}`}>
      <a href="/" className={headerMBStyles.exLogoLink}>
        <img
          src={headerEx}
          alt={"ex"}
          className={headerMBStyles.exLogo}
        />
      </a>
      <img
        src={hamburgerButton}
        alt={"menu"}
        className={headerMBStyles.hamburger}
        onClick={() => {setSideNavBarStatus(true)}}
        />
    </div>
  );
};

export default HeaderNavBarMB;
