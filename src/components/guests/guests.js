import * as React from "react";
import * as guestsStyles from './guests.module.css';
import { StaticImage } from "gatsby-plugin-image"

import guestBackImg from "../../images/guests-head.svg";
import sureshImg from "../../images/guests/suresh.svg";
import vinodImg from "../../images/guests/vinod.svg";
import mohammedImg from "../../images/guests/mohammed.svg";

import { useEffect } from "react"
import AOS from "aos"


const Guests = ({guestsRef, setSideNavBarStatus}) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div  data-aos-once="true" data-aos="fade-up" data-aos-duration="800" ref={guestsRef} className={guestsStyles.container} onClick={() => setSideNavBarStatus(false)}>
      <div data-aos-once="true" data-aos="zoom-in" data-aos-duration="800" className={guestsStyles.header}>
        <img
          src={guestBackImg}
          alt={"guests"}
          className={guestsStyles.guestsHeadBack}
        />
      </div>
      <div className={guestsStyles.bodyContainer}>
        {/*<div className={guestsStyles.card}>*/}
        {/*  <img*/}
        {/*    src={guest1}*/}
        {/*    alt={"Guests Name"}*/}
        {/*    className={guestsStyles.cardImage}*/}
        {/*    data-aos-once="true" data-aos="zoom-in" data-aos-duration="1500"*/}
        {/*  />*/}
        {/*  <div className={guestsStyles.cardText}>*/}
        {/*    <div className={guestsStyles.guestName}>Guest Name</div>*/}
        {/*    <div className={guestsStyles.guestDesignation}>Designation of guest</div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className={guestsStyles.card}>
          <img
            src={vinodImg}
            alt={"Vinod Narayan"}
            className={guestsStyles.cardImage}
            data-aos-once="true" data-aos="zoom-in" data-aos-duration="1500"
          />
          <div className={guestsStyles.cardText}>
            <div className={guestsStyles.guestName}>Vinod Narayan</div>
            <div className={guestsStyles.guestDesignation}>Agile Coach and Vlogger</div>
          </div>
        </div>
        <div className={guestsStyles.card}>
          <img
            src={mohammedImg}
            alt={"Mohammed Hisamuddin"}
            className={guestsStyles.cardImage}
            data-aos-once="true" data-aos="zoom-in" data-aos-duration="1500"
          />
          <div className={guestsStyles.cardText}>
            <div className={guestsStyles.guestName}>Mohammed Hisamuddin</div>
            <div className={guestsStyles.guestDesignation}>CEO Entri App</div>
          </div>
        </div>
        <div className={guestsStyles.card}>
          <img
            src={sureshImg}
            alt={"Suresh Nair"}
            className={guestsStyles.cardImage}
            data-aos-once="true" data-aos="zoom-in" data-aos-duration="1500"
          />
          <div className={guestsStyles.cardText}>
            <div className={guestsStyles.guestName}>Suresh Nair</div>
            <div className={guestsStyles.guestDesignation}>Chief Technology Advisor at Social Alpha</div>
          </div>
        </div>
        {/*<div className={guestsStyles.card}>*/}
        {/*  <img*/}
        {/*    src={guest1}*/}
        {/*    alt={"Guests Name"}*/}
        {/*    className={guestsStyles.cardImage}*/}
        {/*    data-aos-once="true" data-aos="zoom-in" data-aos-duration="1500"*/}
        {/*  />*/}
        {/*  <div className={guestsStyles.cardText}>*/}
        {/*    <div className={guestsStyles.guestName}>Guest Name</div>*/}
        {/*    <div className={guestsStyles.guestDesignation}>Designation of guest</div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Guests;
