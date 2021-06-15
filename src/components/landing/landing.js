import * as React from "react";

import * as landingStyles from "./landing.module.css";
import LandingMB from "./landing-mb"


import exBack from "../../images/ex-back-dt.svg";
import excelsior21Img from "../../images/excelsior21-front-dt.svg";
import ex21Img from "../../images/ex21.svg";
import cube from "../../images/Point-line triangle cube.svg";
import bigCube from "../../images/Big Point-line triangle cube.svg";



const Landing = ({aboutRef, setSideNavBarStatus}) => {
  return (
    <div className={landingStyles.container}>
        <div className={`${landingStyles.dtContainer} ${landingStyles.desktopVersion}`} ref={aboutRef} >
            <img
              src={exBack}
              alt={"ex"}
              className={landingStyles.exBackImage}
            />
            <img
              src={excelsior21Img}
              alt={"excelsior21"}
              className={landingStyles.excelsior21Image}
            />
            <img
              src={ex21Img}
              alt={"excelsior21"}
              className={landingStyles.ex21}
            />
            <div className={landingStyles.riseTextContainer}>
                <span className={landingStyles.riseQuotes}>"</span><span className={landingStyles.riseText}>Rise above the rest</span><span className={landingStyles.riseQuotes}>"</span>
            </div>
          <div className={landingStyles.regClosed}>
            Registration Closed
          </div>
            <img
              src={cube}
              alt={"excelsior21"}
              className={landingStyles.cube1}
            />
            <img
              src={bigCube}
              alt={"excelsior21"}
              className={landingStyles.cube2}
            />
            <img
              src={cube}
              alt={"excelsior21"}
              className={landingStyles.cube3}
            />
        </div>
        <LandingMB setSideNavBarStatus={setSideNavBarStatus} />
    </div>
  );
}

export default Landing;
