import * as React from 'react';
import * as packStyles from './packs.module.css';
import { StaticImage } from "gatsby-plugin-image"

import eventsBack from "../../images/events-back.svg";
import cubeLarge from "../../images/events-cube-large.svg";
import cubeSmall from "../../images/events-cube-small.svg";


const Card = ({head, content}) => {
  return (
    <div className={packStyles.card}>
      <div className={packStyles.cardHead}>{head}</div>
      <div className={packStyles.cardBody}>

      </div>
      <div className={packStyles.registerButton}><span>Register Now</span></div>
    </div>
  );
};


const Pack = ({packsRef, setSideNavBarStatus}) => {
  return (
    <div ref={packsRef} className={packStyles.container} onClick={() => setSideNavBarStatus(false)}>
      <div className={packStyles.headerContainer}>
        <img
          src={eventsBack}
          alt={"events"}
          className={packStyles.eventsHeadBack}
        />
        <div className={packStyles.eventsHeadText}>EVENTS</div>
      </div>
      <img
        src={cubeLarge}
        alt={"cube"}
        className={packStyles.cubeLarge}
      />
      <div className={packStyles.packsBody}>
        <div className={packStyles.packsHead}>Best Shots For You</div>
        <div className={packStyles.cardsContainer}>
          <Card head={"Economy"} />
          <Card head={"Essentials"} />
          <Card head={"Premium"} />
        </div>
        <img
          src={cubeSmall}
          alt={"cube"}
          className={packStyles.cubeSmall}
        />
      </div>
    </div>
  );
};

export default Pack;
