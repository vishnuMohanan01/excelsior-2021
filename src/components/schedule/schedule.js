import React from "react";
import * as scheduleStyles from "./schedule.module.css";
import { StaticImage } from "gatsby-plugin-image"


const Schedule = () => {
  return(
    <div className={scheduleStyles.container}>
      <div className={scheduleStyles.head}>SCHEDULE</div>
      <StaticImage
        src={"../../images/timeline.svg"}
        alt={"schedule"}
        placeholder={"blurred"}
        width={1140}
        height={516}
        className={scheduleStyles.timeLine}
      />
    </div>
  );
};

export default Schedule;

