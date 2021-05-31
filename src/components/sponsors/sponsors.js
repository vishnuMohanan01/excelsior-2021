import React from "react";
import * as sponsorStyles from "./sponsors.module.css";
import { StaticImage } from "gatsby-plugin-image"


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

const Sponsors = () => {
  return (
    <div className={sponsorStyles.container}>
      <div className={sponsorStyles.headerContainer}>
        <StaticImage
          src={"../../images/sponsors-head.svg"}
          alt={"sponsors"}
          placeholder={"blurred"}
          width={835}
          height={113}
          className={sponsorStyles.sponsorsHeadBack}
          style={{position: "absolute"}}
        />
        <div className={sponsorStyles.sponsorTextHead}>SPONSORS</div>
      </div>
      <SponsorType />
    </div>
  );
};

export default Sponsors;
