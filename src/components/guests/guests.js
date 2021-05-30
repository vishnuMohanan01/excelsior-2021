import * as React from "react";
import * as guestsStyles from './guests.module.css';
import { StaticImage } from "gatsby-plugin-image"

const Guests = () => {
  return (
    <div className={guestsStyles.container}>
      <div className={guestsStyles.header}>
        <StaticImage
          src={"../../images/guests-back.svg"}
          alt={"guests"}
          placeholder={"blurred"}
          width={552}
          height={108}
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
