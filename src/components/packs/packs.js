import * as React from 'react';
import * as packStyles from './packs.module.css';
import { StaticImage } from "gatsby-plugin-image"

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


const Pack = () => {
  return (
    <div className={packStyles.container}>
      <div className={packStyles.headerContainer}>
        <StaticImage
          src={"../../images/events-back.svg"}
          alt={"events"}
          placeholder={"blurred"}
          width={564}
          height={113}
          className={packStyles.eventsHeadBack}
          style={{position: "absolute"}}
        />
        <div className={packStyles.eventsHeadText}>EVENTS</div>
      </div>
      <StaticImage
        src={"../../images/events-cube-large.svg"}
        alt={"cube"}
        placeholder={"blurred"}
        width={307}
        height={718}
        className={packStyles.cubeLarge}
        style={{position: "absolute"}}
      />
      <div className={packStyles.packsBody}>
        <div className={packStyles.packsHead}>Best Shots For You</div>
        <div className={packStyles.cardsContainer}>
          <Card head={"Economy"} />
          <Card head={"Essentials"} />
          <Card head={"Premium"} />
        </div>
        <StaticImage
          src={"../../images/events-cube-small.svg"}
          alt={"cube"}
          placeholder={"blurred"}
          width={390}
          height={631}
          className={packStyles.cubeSmall}
          style={{position: "absolute"}}
        />
      </div>
    </div>
  );
};

export default Pack;
