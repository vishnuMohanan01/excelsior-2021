import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as landingStyles from "./landing.module.css";
import './landingStyles.scss'

const Landing = ({aboutRef}) => {
  return (
    <div className={landingStyles.container} ref={aboutRef} >
      <StaticImage
        src={"../../images/ex-back-dt.svg"}
        alt={"ex"}
        placeholder={"blurred"}
        width={1179}
        height={628}
        className={landingStyles.exBackImage}
      />
      <StaticImage
        src={"../../images/excelsior21-front-dt.svg"}
        alt={"excelsior21"}
        placeholder={"blurred"}
        width={320}
        height={57}
        className={landingStyles.excelsior21Image}
        style={{position: "absolute"}}
      />
      <StaticImage
        src={"../../images/ex21.svg"}
        alt={"excelsior21"}
        placeholder={"blurred"}
        width={464}
        height={217}
        className={landingStyles.ex21}
        style={{position: "absolute"}}
      />
      <div className={landingStyles.riseTextContainer}>
        <span className={landingStyles.riseQuotes}>"</span><span className={landingStyles.riseText}>Rise above the rest</span><span className={landingStyles.riseQuotes}>"</span>
      </div>
      <StaticImage
        src={"../../images/Point-line triangle cube.svg"}
        alt={"excelsior21"}
        placeholder={"blurred"}
        width={234}
        height={234}
        className={landingStyles.cube1}
        style={{position: "absolute"}}
      />
      <StaticImage
        src={"../../images/Big Point-line triangle cube.svg"}
        alt={"excelsior21"}
        placeholder={"blurred"}
        width={283}
        height={381}
        className={landingStyles.cube2}
        style={{position: "absolute"}}
      />
      <StaticImage
        src={"../../images/Point-line triangle cube.svg"}
        alt={"excelsior21"}
        placeholder={"blurred"}
        width={124}
        height={124}
        className={landingStyles.cube3}
        style={{position: "absolute"}}
      />
    </div>
  );
}

export default Landing;
