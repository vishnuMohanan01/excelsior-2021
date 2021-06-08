import * as React from 'react';
import * as packStyles from './packs.module.css';

import eventsBack from "../../images/events-back.svg";
import cubeLarge from "../../images/events-cube-large.svg";
import cubeSmall from "../../images/events-cube-small.svg";
import { useEffect } from "react";
import AOS from "aos";



const Pack = ({packsRef, setSideNavBarStatus}) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos-once="true" data-aos="fade-up" data-aos-duration="800" ref={packsRef} className={packStyles.container} onClick={() => setSideNavBarStatus(false)}>
      <div data-aos-once="true" data-aos="zoom-in" data-aos-duration="800" className={packStyles.headerContainer}>
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
          <div data-aos-once="true" data-aos="flip-down" data-aos-duration="1500" className={packStyles.card}>
            <div className={packStyles.cardHead}>Premium</div>
            <div className={packStyles.cardBody}>
              <div className={packStyles.cardBodyContent}>Brings to you a band of workshop, talks and goodies</div>
              <div className={packStyles.tagName}>Workshop + All talks + Goodies</div>
              <div className={packStyles.ratesContainer}>
                <div className={packStyles.rate}>IEEE GECPKDian - <strong>100 /-</strong></div>
                <div className={packStyles.rate}>Non IEEE GECPKDian - <strong>149 /-</strong></div>
                <div className={packStyles.rate}>IEEE Non GECPKDian - <strong>149 /-</strong></div>
                <div className={packStyles.rate}>Non IEEE Non GECPKDian - <strong>229 /-</strong></div>
              </div>
            </div>
            <a href={"https://www.yepdesk.com/open-register/60bdbea546e0fb0001d784a9"} target={"_blank"} className={packStyles.registerButton}><span>Register Now</span></a>
          </div>
          <div data-aos-once="true" data-aos="flip-down" data-aos-duration="1500" className={packStyles.card}>
            <div className={packStyles.cardHead}>Essentials</div>
            <div className={packStyles.cardBody}>
              <div className={packStyles.cardBodyContent}>Awards you all talks</div>
              <div className={packStyles.tagName}>All Talks</div>
              <div className={packStyles.ratesContainer}>
                <div className={packStyles.rate}>IEEE GECPKDian - <strong>59 /-</strong></div>
                <div className={packStyles.rate}>Non IEEE GECPKDian - <strong>99 /-</strong></div>
                <div className={packStyles.rate}>IEEE Non GECPKDian - <strong>99 /-</strong></div>
                <div className={packStyles.rate}>Non IEEE Non GECPKDian - <strong>119 /-</strong></div>
              </div>
            </div>
            <a href={"https://www.yepdesk.com/open-register/60be2d9d46e0fb0001d9e3f6"} target={"_blank"}  className={packStyles.registerButton}><span>Register Now</span></a>
          </div>
          <div data-aos-once="true" data-aos="flip-down" data-aos-duration="1500" className={packStyles.card}>
            <div className={packStyles.cardHead}>Economy</div>
            <div className={packStyles.cardBody}>
              <div className={packStyles.cardBodyContent}>Grab a talk of your passion</div>
              <div className={packStyles.tagName}>Pick any talks</div>
              <div className={packStyles.ratesContainer}>
                <div className={packStyles.rate}>IEEE GECPKDian - <strong>20 /-</strong></div>
                <div className={packStyles.rate}>Non IEEE GECPKDian - <strong>25 /-</strong></div>
                <div className={packStyles.rate}>IEEE Non GECPKDian - <strong>25 /-</strong></div>
                <div className={packStyles.rate}>Non IEEE Non GECPKDian - <strong>30/-</strong></div>
              </div>
            </div>
            <a href={"https://docs.google.com/forms/d/e/1FAIpQLSfYWly6dNYsa7ujEtobyft3jRZmrFRuDft8hRZ75juvfqEluQ/viewform?usp=sf_link"} target={"_blank"} className={packStyles.registerButton}><span>Register Now</span></a>
          </div>
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
