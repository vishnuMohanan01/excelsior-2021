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
        <div className={aboutStyles.leftPara}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
        </div>
        <div className={aboutStyles.leftPara}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pag.
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
