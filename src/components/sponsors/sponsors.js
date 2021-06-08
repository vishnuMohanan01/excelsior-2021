import React, { useEffect } from "react"
import * as sponsorStyles from "./sponsors.module.css";


import sponsorHeadImg from "../../images/sponsors-head.svg";
import alumniSponsorImage from "../../images/sponsor-alumni-img.svg";
import epoqImg from "../../images/epoq.png";

import AOS from "aos"


const Card = ({name, description, imageName, imageClassName}) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={sponsorStyles.card}>
      <img src={imageName} alt={"name"} className={imageClassName} data-aos-once="true" data-aos="zoom-in" data-aos-duration="1500" />
      <div className={sponsorStyles.cardName}>{name}</div>
      <div className={sponsorStyles.cardDescription}>{description}</div>
    </div>
  );
}

const TitleType = () => {
  return (
    <div className={sponsorStyles.typeContainer}>
      <div className={sponsorStyles.typeHead}>Title Sponsor</div>
      <div className={sponsorStyles.cardContainer}>
        <Card imageClassName={sponsorStyles.epoqImg} imageName={epoqImg}  name={""} description={""} />
        {/*<Card name={"Full Name"} description={"Description for the sponsor"} />*/}
        {/*<Card name={"Full Name"} description={"Description for the sponsor"} />*/}
        {/*<Card name={"Full Name"} description={"Description for the sponsor"} />*/}
      </div>
    </div>
  );
};


const FinanceType = () => {
  return (
    <div className={sponsorStyles.typeContainer}>
      <div className={sponsorStyles.typeHead}>Financial Sponsor</div>
      <div className={sponsorStyles.cardContainer}>
        <Card imageClassName={sponsorStyles.sponsorImage} imageName={alumniSponsorImage}  name={"Alumni GEC Palakkad"} description={"A token of love and appreciation"} />
        {/*<Card name={"Full Name"} description={"Description for the sponsor"} />*/}
        {/*<Card name={"Full Name"} description={"Description for the sponsor"} />*/}
        {/*<Card name={"Full Name"} description={"Description for the sponsor"} />*/}
      </div>
    </div>
  );
};

const Sponsors = ({sponsorRef, setSideNavBarStatus}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos-once="true" data-aos="fade-up" data-aos-duration="800" ref={sponsorRef} className={sponsorStyles.container} onClick={() => setSideNavBarStatus(false)}>
      <div data-aos-once="true" data-aos="zoom-in" data-aos-duration="800" className={sponsorStyles.headerContainer}>
        <img
          src={sponsorHeadImg}
          alt={"sponsors"}
          className={sponsorStyles.sponsorsHeadBack}
        />
        <div className={sponsorStyles.sponsorTextHead}>SPONSORS</div>
      </div>
      <TitleType />
      <FinanceType />
    </div>
  );
};

export default Sponsors;
