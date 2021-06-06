import * as React from "react";
import * as guestsStyles from './guests.module.css';
import { StaticImage } from "gatsby-plugin-image"

import guestBackImg from "../../images/guests-head.svg";
import guest1 from "../../images/guests/guest.svg";


const Guests = ({guestsRef, setSideNavBarStatus}) => {
  return (
    <div ref={guestsRef} className={guestsStyles.container} onClick={() => setSideNavBarStatus(false)}>
      <div className={guestsStyles.header}>
        <img
          src={guestBackImg}
          alt={"guests"}
          className={guestsStyles.guestsHeadBack}
        />
      </div>
      <div className={guestsStyles.bodyContainer}>
        <div className={guestsStyles.card}>
          <img
            src={guest1}
            alt={"Guests Name"}
            className={guestsStyles.cardImage}
          />
          <div className={guestsStyles.cardText}>
            <div className={guestsStyles.guestName}>Guest Name</div>
            <div className={guestsStyles.guestDesignation}>Designation of guest</div>
          </div>
        </div>
        <div className={guestsStyles.card}>
          <img
            src={guest1}
            alt={"Guests Name"}
            className={guestsStyles.cardImage}
          />
          <div className={guestsStyles.cardText}>
            <div className={guestsStyles.guestName}>Guest Name</div>
            <div className={guestsStyles.guestDesignation}>Designation of guest</div>
          </div>
        </div>
        <div className={guestsStyles.card}>
          <img
            src={guest1}
            alt={"Guests Name"}
            className={guestsStyles.cardImage}
          />
          <div className={guestsStyles.cardText}>
            <div className={guestsStyles.guestName}>Guest Name</div>
            <div className={guestsStyles.guestDesignation}>Designation of guest</div>
          </div>
        </div>
        <div className={guestsStyles.card}>
          <img
            src={guest1}
            alt={"Guests Name"}
            className={guestsStyles.cardImage}
          />
          <div className={guestsStyles.cardText}>
            <div className={guestsStyles.guestName}>Guest Name</div>
            <div className={guestsStyles.guestDesignation}>Designation of guest</div>
          </div>
        </div>
        <div className={guestsStyles.card}>
          <img
            src={guest1}
            alt={"Guests Name"}
            className={guestsStyles.cardImage}
          />
          <div className={guestsStyles.cardText}>
            <div className={guestsStyles.guestName}>Guest Name</div>
            <div className={guestsStyles.guestDesignation}>Designation of guest</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guests;
