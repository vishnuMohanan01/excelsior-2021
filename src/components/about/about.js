import * as React from "react";
import * as aboutStyles from "./about.module.css";
import { StaticImage } from "gatsby-plugin-image"


const About = ({aboutBottomRef}) => {
  return (
    <div ref={aboutBottomRef} className={aboutStyles.container}>
      <div className={aboutStyles.leftContainer}>
        <div className={aboutStyles.leftHead}>
          <StaticImage
            src={"../../images/what-is-excelsior-back.svg"}
            alt={"excelsior21"}
            placeholder={"blurred"}
            width={711}
            height={91}
            className={aboutStyles.leftHeadBack}
          />
          <div className={aboutStyles.leftHeadFront}>
            <div className={aboutStyles.leftHeadText}>What is</div>
            <StaticImage
              src={"../../images/what-is-excelsior-front.svg"}
              alt={"excelsior21"}
              placeholder={"blurred"}
              width={478}
              height={85}
              className={aboutStyles.leftHeadExcelsior}
            />
          </div>
        </div>
        <div className={aboutStyles.leftPara}>Exclesior 2021 is the third emphasis of the flagship event of IEEE SB GEC Palakkad. It is usually conducted at Government Engineering College, Sreekrishnapuram, Palakkad every year, lasts for a period of nearly 4 days. Participation of about 200 vibrant technophiles,the event marks a techno enthusiasts fortune moment to get involved in culmination of information,inspiration and association.
        </div>
        <div className={aboutStyles.leftPara}>
          Gratifying to curious minds, it is an integration of several interactive orations by some of the interesting minds in technology as well as workshops on your passion. This tech-fest takes young dynamic minds to the world of technovation and techtainment.
        </div>
      </div>
      <div className={aboutStyles.rightContainer}>
        <StaticImage
          src={"../../images/about-ex.svg"}
          alt={"ex"}
          placeholder={"blurred"}
          width={592}
          height={456}
          style={{position: "absolute"}}
          className={aboutStyles.rightEx}
        />
        <StaticImage
          src={"../../images/Rise-Above-The-Rest.svg"}
          alt={"rise above the rest"}
          placeholder={"blurred"}
          width={507}
          height={346}
          style={{position: "absolute"}}
          className={aboutStyles.rightRise}
        />
        <StaticImage
          src={"../../images/Point-line triangle cube.svg"}
          alt={"excelsior21"}
          placeholder={"blurred"}
          width={334}
          height={334}
          style={{position: "absolute"}}
          className={aboutStyles.rightCube}
        />
      </div>
    </div>
  );
};

export default About;
