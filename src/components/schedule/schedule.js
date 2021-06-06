import React from "react";
import * as scheduleStyles from "./schedule.module.css";
import { StaticImage } from "gatsby-plugin-image"

import scheduleImg from "../../images/timeline.svg"

const Schedule = ({scheduleRef, setSideNavBarStatus}) => {
  return(
    <div ref={scheduleRef} className={scheduleStyles.container} onClick={() => setSideNavBarStatus(false)}>
      <div className={scheduleStyles.head}>SCHEDULE</div>
      <img
        src={scheduleImg}
        alt={"schedule"}
        className={scheduleStyles.timeLine}
      />
    </div>
  );
};

export default Schedule;

