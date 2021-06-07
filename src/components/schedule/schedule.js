import React, { useEffect } from "react"
import * as scheduleStyles from "./schedule.module.css";

import scheduleImg from "../../images/timeline.svg"
import scheduleMBImg from "../../images/mb/schedule.svg"
import AOS from "aos"

const Schedule = ({scheduleRef, setSideNavBarStatus}) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return(
    <div  data-aos-once="true" data-aos="fade-up" data-aos-duration="800" ref={scheduleRef} className={scheduleStyles.container} onClick={() => setSideNavBarStatus(false)}>
      <div className={scheduleStyles.head}>SCHEDULE</div>
      <img
        src={scheduleImg}
        alt={"schedule"}
        className={`${scheduleStyles.timeLine} ${scheduleStyles.desktopVersion}`}
      />
      <img
        src={scheduleMBImg}
        alt={"schedule"}
        className={`${scheduleStyles.timeLine} ${scheduleStyles.mobileVersion}`}
      />
    </div>
  );
};

export default Schedule;

