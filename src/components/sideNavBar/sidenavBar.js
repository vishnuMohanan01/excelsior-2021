import React from "react";
import * as sideNavStyles from "./sideNavBar.module.css";
import { StaticImage } from "gatsby-plugin-image"

import headerEx from "../../images/mb/navbar-ex.svg";
import guestsImg from "../../images/mb/navbar/guests.svg";
import workshopsImg from "../../images/mb/navbar/workshops.svg";
import scheduleImg from "../../images/mb/navbar/schedule.svg";
import eventImg from "../../images/mb/navbar/events.svg";
import alumniImg from "../../images/mb/navbar/alumni.svg";
import sponsorsImg from "../../images/mb/navbar/sponsors.svg";
import faqImg from "../../images/mb/navbar/faq.svg";
import teamImg from "../../images/mb/navbar/team.svg";


const SideNavBar = ({sideNavBarStatus}) => {
  return (
    (sideNavBarStatus) ?
      <div className={sideNavStyles.container}>
        <div className={sideNavStyles.header}>
          <img
            src={headerEx}
            alt={"ex"}
            className={sideNavStyles.headerEx}
          />
          <div className={sideNavStyles.navHeaderText}>Excelsior '21</div>
        </div>
        <div className={sideNavStyles.navListContainer}>
          <div className={sideNavStyles.navItemContainer}>
            <img
              src={guestsImg}
              alt={"guests"}
              className={sideNavStyles.navListIcon}
            />
            <div className={sideNavStyles.navItemText}>Guests</div>
          </div>
          <div className={sideNavStyles.navItemContainer}>
            <img
              src={workshopsImg}
              alt={"workshops"}
              className={sideNavStyles.navListIcon}
            />
            <div className={sideNavStyles.navItemText}>Workshops</div>
          </div>
          <div className={sideNavStyles.navItemContainer}>
            <img
              src={scheduleImg}
              alt={"schedule"}
              className={sideNavStyles.navListIcon}
            />
            <div className={sideNavStyles.navItemText}>Schedule</div>
          </div>
          <div className={sideNavStyles.navItemContainer}>
            <img
              src={eventImg}
              alt={"events"}
              className={sideNavStyles.navListIcon}
            />
            <div className={sideNavStyles.navItemText}>Events</div>
          </div>
          <div className={sideNavStyles.navItemContainer}>
            <img
              src={alumniImg}
              alt={"alumni"}
              className={sideNavStyles.navListIcon}
            />
            <div className={sideNavStyles.navItemText}>Alumni's Talk</div>
          </div>
          <div className={sideNavStyles.navItemContainer}>
            <img
              src={sponsorsImg}
              alt={"sponsors"}
              className={sideNavStyles.navListIcon}
            />
            <div className={sideNavStyles.navItemText}>Sponsors</div>
          </div>
          <div className={sideNavStyles.navItemContainer}>
            <img
              src={faqImg}
              alt={"faq"}
              className={sideNavStyles.navListIcon}
            />
            <div className={sideNavStyles.navItemText}>FAQ</div>
          </div>
        </div>
        <div className={`${sideNavStyles.teamItem}`}>
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
