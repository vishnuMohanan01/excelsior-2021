import React from "react";
import * as sponsorStyles from "./sponsors.module.css";
import { StaticImage } from "gatsby-plugin-image"


import sponsorHeadImg from "../../images/sponsors-head.svg";


const Card = ({name, description}) => {
  return (
    <div className={sponsorStyles.card}>
      <div></div>
      <div className={sponsorStyles.cardName}>{name}</div>
      <div className={sponsorStyles.cardDescription}>{description}</div>
    </div>
  );
}


const SponsorType = () => {
  return (
    <div className={sponsorStyles.typeContainer}>
      <div className={sponsorStyles.typeHead}>Sponsor Type</div>
      <div className={sponsorStyles.cardContainer}>
        <Card name={"Full Name"} description={"Description for the sponsor"} />
        <Card name={"Full Name"} description={"Description for the sponsor"} />
        <Card name={"Full Name"} description={"Description for the sponsor"} />
        <Card name={"Full Name"} description={"Description for the sponsor"} />
      </div>
    </div>
  );
};

const Sponsors = ({sponsorRef, setSideNavBarStatus}) => {
  return (
    <div ref={sponsorRef} className={sponsorStyles.container} onClick={() => setSideNavBarStatus(false)}>
      <div className={sponsorStyles.headerContainer}>
        <img
          src={sponsorHeadImg}
          alt={"sponsors"}
          className={sponsorStyles.sponsorsHeadBack}
        />
        <div className={sponsorStyles.sponsorTextHead}>SPONSORS</div>
      </div>
      <SponsorType />
    </div>
  );
};

export default Sponsors;
