import * as React from "react";
import * as aboutStyles from "./about.module.css";


import whatIsExBackImg from "../../images/what-is-excelsior-back.svg";
import excelsior21Img from "../../images/what-is-excelsior-front.svg";
import aboutBigEx from "../../images/about-ex.svg";
import riseTextImg from "../../images/Rise-Above-The-Rest.svg";
import cubeImg from "../../images/Point-line triangle cube.svg";
import { useEffect } from "react"
import AOS from "aos"



const About = ({aboutBottomRef, setSideNavBarStatus}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos-once="true" data-aos="fade-up" data-aos-duration="800" ref={aboutBottomRef} className={aboutStyles.container} onClick={() => setSideNavBarStatus(false)}>
      <div className={aboutStyles.leftContainer}>
        <div className={aboutStyles.leftHead}>
          <img
            src={whatIsExBackImg}
            alt={"excelsior"}
            className={aboutStyles.leftHeadBack}
          />
          <div className={aboutStyles.leftHeadFront}>
            <div className={aboutStyles.leftHeadText}>What is</div>
            <img
              src={excelsior21Img}
              alt={"excelsior21"}
              className={aboutStyles.leftHeadExcelsior}
            />
          </div>
        </div>
        <div className={aboutStyles.leftPara}>Exclesior 2021 is the third emphasis of the flagship event of IEEE SB GEC Palakkad. It is usually conducted at Government Engineering College, Sreekrishnapuram, Palakkad every year, lasts for a period of nearly 4 days. Participation of about 200 vibrant technophiles,the event marks a techno enthusiasts fortune moment to get involved in culmination of information, inspiration and association.
        </div>
        <div className={aboutStyles.leftPara}>
          Gratifying to curious minds, it is an integration of several interactive orations by some of the interesting minds in technology as well as workshops on your passion. This tech-fest takes young dynamic minds to the world of technovation and techtainment.  It mainly focuses on providing quality technical workshops, events and webinars to the students from almost every Engineering colleges, the main aim being making the students technically independent in the respected fields.
        </div>
      </div>
      <div className={aboutStyles.rightContainer}>
        <img
          src={cubeImg}
          alt={"cubeSmall"}
          style={{position: "absolute"}}
          className={aboutStyles.rightSmallCube}
        />
        <img
          src={aboutBigEx}
          alt={"ex"}
          // style={{position: "absolute"}}
          className={aboutStyles.rightEx}
        />
        <img
          src={riseTextImg}
          alt={"rise above the rest"}
          style={{position: "absolute"}}
          className={aboutStyles.rightRise}
        />
        <img
          src={cubeImg}
          alt={"excelsior21"}
          style={{position: "absolute"}}
          className={aboutStyles.rightCube2}
        />
        <img
          src={cubeImg}
          alt={"excelsior21"}
          style={{position: "absolute"}}
          className={aboutStyles.rightCube}
        />
      </div>
    </div>
  );
};

export default About;
