import React from "react";
import * as landingMBStyles from "./landingMB.module.css";

import ex21 from "../../images/mb/ex21.svg";
import excelsior21 from "../../images/excelsior21-front-dt.svg";
import exBack from "../../images/mb/ex-back-mb.svg";
import cube from "../../images/Point-line triangle cube.svg";


const LandingMB = ({setSideNavBarStatus}) => {
  return (
    <div className={landingMBStyles.container} onClick={() => setSideNavBarStatus(false)}>
      <img
        src={exBack}
        alt="ex"
        className={landingMBStyles.exBack}
      />
      <img
        src={excelsior21}
        alt="excelsior21"
        className={landingMBStyles.excelsior21}
      />
      <img
        src={ex21}
        alt="excelsior21"
        className={landingMBStyles.ex21}
      />
      <div className={landingMBStyles.regNowRect}>
        <a href={"https://www.google.com"} target={"_blank"} className={landingMBStyles.regNowLink}>Register Now</a>
      </div>
      <img
        src={cube}
        alt="excelsior21"
        className={landingMBStyles.cube}
      />
    </div>
  );
};

export default LandingMB;
