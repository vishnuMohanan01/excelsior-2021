import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.css";
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react"


const HeaderMenu = () => {
  const [regSelected, setRegState] = useState(false);

  return (
    <div className={headerStyles.menuContainer}>
      <Link  to={"/"} onClick={() => setRegState(false)} className={headerStyles.menuItem} style={(!regSelected) ? {borderBottom: "3px solid #fff"} : {borderBottom: "none"}}>
        About
      </Link>
      <Link  to={"/"} onClick={() => setRegState(true)} className={headerStyles.menuItem}  style={(!!regSelected) ? {borderBottom: "3px solid #fff"} : {borderBottom: "none"}}>
        Registration
      </Link>
    </div>
  );
};

const HeaderNavBar = () => (
  <div className={headerStyles.navBarContainer}>
    <StaticImage
      src={"../../images/excelsior-header.svg"}
      alt={"excelsior'21"}
      placeholder={"blurred"}
      width={213}
      height={39}
      className={headerStyles.excelsiorImage}
    />
    <HeaderMenu />
  </div>
);


const Header = () => (
  <div className={headerStyles.container}>
    <HeaderNavBar />
  </div>
)


export default Header
