import React from "react";
import * as sideNavStyles from "./sideNavBar.module.css";

import headerEx from "../../images/mb/navbar-ex.svg";
import guestsImg from "../../images/mb/navbar/guests.svg";
import workshopsImg from "../../images/mb/navbar/workshops.svg";
import scheduleImg from "../../images/mb/navbar/schedule.svg";
import eventImg from "../../images/mb/navbar/events.svg";
import alumniImg from "../../images/mb/navbar/alumni.svg";
import sponsorsImg from "../../images/mb/navbar/sponsors.svg";
import faqImg from "../../images/mb/navbar/faq.svg";
import teamImg from "../../images/mb/navbar/team.svg";


const SideNavBar = ({sideNavBarStatus, setSideNavBarStatus, contactRef, sponsorRef, aboutRef, alumniRef, setTabSelected, scrollToRef, packsRef, faqRef, guestsRef, scheduleRef, workshopsRef}) => {
  return (
    (sideNavBarStatus) ?
      <div className={sideNavStyles.container}>
        <div className={sideNavStyles.header} onClick={() => {setTabSelected("about");scrollToRef(aboutRef);}}>
          <img
            src={headerEx}
            alt={"ex"}
            className={sideNavStyles.headerEx}
          />
          <div className={sideNavStyles.navHeaderText}>Excelsior '21</div>
        </div>
        <div className={sideNavStyles.navListContainer}>
          <div className={sideNavStyles.navItemContainer} onClick={() => {setTabSelected("guests");scrollToRef(guestsRef)}}>
            <img
              src={guestsImg}
              alt={"guests"}
              className={sideNavStyles.navListIcon}
            />
            <div className={sideNavStyles.navItemText}>Guests</div>
          </div>
          <div className={sideNavStyles.navItemContainer} onClick={() => {setTabSelected("workshops");scrollToRef(workshopsRef)}}>
            <img
              src={workshopsImg}
              alt={"workshops"}
              className={sideNavStyles.navListIcon}
            />
            <div className={sideNavStyles.navItemText}>Workshops</div>
          </div>
          <div className={sideNavStyles.navItemContainer} onClick={() => {setTabSelected("schedule");scrollToRef(scheduleRef)}}>
            <img
              src={scheduleImg}
              alt={"schedule"}
              className={sideNavStyles.navListIcon}
            />
            <div className={sideNavStyles.navItemText}>Schedule</div>
          </div>
          <div className={sideNavStyles.navItemContainer} onClick={() => {setTabSelected("packs");scrollToRef(packsRef)}}>
            <img
              src={eventImg}
              alt={"events"}
              className={sideNavStyles.navListIcon}
            />
            <div className={sideNavStyles.navItemText}>Events</div>
          </div>
          <div className={sideNavStyles.navItemContainer} onClick={() => {setTabSelected("alumni");scrollToRef(alumniRef)}}>
            <img
              src={alumniImg}
              alt={"alumni"}
              className={sideNavStyles.navListIcon}
            />
            <div className={sideNavStyles.navItemText}>Alumni's Talk</div>
          </div>
          <div className={sideNavStyles.navItemContainer} onClick={() => {setTabSelected("sponsors");scrollToRef(sponsorRef)}}>
            <img
              src={sponsorsImg}
              alt={"sponsors"}
              className={sideNavStyles.navListIcon}
            />
            <div className={sideNavStyles.navItemText}>Sponsors</div>
          </div>
          <div className={sideNavStyles.navItemContainer} onClick={() => {setTabSelected("faq");scrollToRef(faqRef)}}>
            <img
              src={faqImg}
              alt={"faq"}
              className={sideNavStyles.navListIcon}
            />
            <div className={sideNavStyles.navItemText}>FAQ</div>
          </div>
        </div>
        <div className={`${sideNavStyles.teamItem}`} onClick={() => {setTabSelected("contact");scrollToRef(contactRef)}}>
          <img
            src={teamImg}
            alt={"team"}
            className={sideNavStyles.navListIcon}
          />
          <div className={sideNavStyles.navItemText}>Team & Enquiry</div>
        </div>
      </div> : null
  );
};

export default SideNavBar;
