import React from "react";
import * as logoStyles from "./logos.module.css";

import ieee from "../../images/logos/ieee.svg";
import cs from "../../images/logos/cs.svg";
import ias from "../../images/logos/ias.svg";
import sb from "../../images/logos/sb.svg";
import wie from "../../images/logos/wie.svg";

const Logos = () => {
  return (
    <div className={logoStyles.container}>
      <img
        src={sb}
        alt={"SB Logo"}
        className={logoStyles.sb}
      />
      <img
        src={cs}
        alt={"CS Logo"}
        className={logoStyles.cs}
      />
      <img
        src={ias}
        alt={"IAS Logo"}
        className={logoStyles.ias}
      />
      <img
        src={wie}
        alt={"WIE Logo"}
        className={logoStyles.wie}
      />
      <img
        src={ieee}
        alt={"IEEE Logo"}
        className={logoStyles.ieee}
      />
    </div>
  );
};

export default Logos;
