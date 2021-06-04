import * as React from "react";
import * as guestsStyles from './guests.module.css';
import { StaticImage } from "gatsby-plugin-image"

import guestBackImg from "../../images/guests-back.svg";

const Guests = () => {
  return (
    <div className={guestsStyles.container}>
      <div className={guestsStyles.header}>
        <img
          src={guestBackImg}
          alt={"guests"}
          className={guestsStyles.guestsHeadBack}
        />
        <div className={guestsStyles.guestHeadTextContainer}>GUESTS</div>
      </div>
      <div>
        {/*TODO: Here Goes the guest images*/}
      </div>
    </div>
  );
};

export default Guests;
