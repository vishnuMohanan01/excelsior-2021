import React from "react";
import * as scheduleStyles from "./schedule.module.css";
import { StaticImage } from "gatsby-plugin-image"

import scheduleImg from "../../images/timeline.svg"

const Schedule = () => {
  return(
    <div className={scheduleStyles.container}>
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

