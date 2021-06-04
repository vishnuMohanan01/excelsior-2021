import React, { useState } from "react"
import * as headerMBStyles from "./headerMB.module.css";
import { StaticImage } from "gatsby-plugin-image"

import headerEx from "../../images/mb/header-ex-logo.svg";
import hamburgerButton from "../../images/mb/hamburger.svg";


const HeaderNavBarMB = ({setSideNavBarStatus}) => {

  return (
    <div className={`${headerMBStyles.mobileVersion} ${headerMBStyles.container}`}>
      <img
        src={headerEx}
        alt={"ex"}
        className={headerMBStyles.exLogo}
      />
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
