import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.css";
import { StaticImage } from "gatsby-plugin-image"
import HeaderNavBarMB from "./header-mb"

import excelsior21Img from "../../images/excelsior-header.svg";


const HeaderMenu = ({tabSelected, setTabSelected, scrollToRef, aboutRef, contactRef, sponsorRef}) => {
  return (
    <div className={headerStyles.menuContainer}>
      <div onClick={() => {setTabSelected("about");scrollToRef(aboutRef);}} className={`${headerStyles.menuItem} noSelect`} style={(tabSelected === "about") ? {borderBottom: "3px solid #fff"} : {borderBottom: "none"}}>
        About
      </div>
      <a href={"https://www.google.com"} target={'_blank'} onClick={() => {setTabSelected("registration");setTimeout(() => setTabSelected("about"), 1000)}} className={`${headerStyles.menuItem} noSelect`}  style={(tabSelected === "registration") ? {borderBottom: "3px solid #fff"} : {borderBottom: "none"}}>
        Registration
      </a>
      <div onClick={() => {setTabSelected("sponsors");scrollToRef(sponsorRef);}} className={`${headerStyles.menuItem} noSelect`}  style={(tabSelected === "sponsors") ? {borderBottom: "3px solid #fff"} : {borderBottom: "none"}}>
        Sponsors
      </div>
      <div onClick={() => {setTabSelected("contact");scrollToRef(contactRef);}} className={`${headerStyles.menuItem} noSelect`}  style={(tabSelected === "contact") ? {borderBottom: "3px solid #fff"} : {borderBottom: "none"}}>
        Contact
      </div>
    </div>
  );
};


const HeaderNavBar = ({tabSelected, setTabSelected, scrollToRef, aboutRef, contactRef, sponsorRef}) => (
  <div className={`${headerStyles.navBarContainer} ${headerStyles.desktopVersion}`}>
    <a href="/" className={headerStyles.homeLink}>
      <img
        src={excelsior21Img}
        alt={"excelsior'21"}
        className={headerStyles.excelsiorImage}
      />
    </a>
    <HeaderMenu tabSelected={tabSelected} setTabSelected={setTabSelected} scrollToRef={scrollToRef} contactRef={contactRef} sponsorRef={sponsorRef} aboutRef={aboutRef} />
  </div>
);


const Header = ({setSideNavBarStatus, tabSelected, setTabSelected, scrollToRef, aboutRef, contactRef, sponsorRef}) => (
  <div className={headerStyles.container}>
    <HeaderNavBar
      tabSelected={tabSelected}
      setTabSelected={setTabSelected}
      scrollToRef={scrollToRef}
      contactRef={contactRef}
      sponsorRef={sponsorRef}
      aboutRef={aboutRef}
    />
    <HeaderNavBarMB
      setSideNavBarStatus={setSideNavBarStatus}
      scrollToRef={scrollToRef}
      contactRef={contactRef}
      sponsorRef={sponsorRef}
      aboutRef={aboutRef}
    />
  </div>
)


export default Header
