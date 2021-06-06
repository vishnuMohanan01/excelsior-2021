import React, { useEffect } from "react"
import * as quoteStyles from './quote.module.css';


import q1 from "../../images/quote1.svg";
import q2 from "../../images/quote2.svg";
import AOS from "aos"


function Quotes({setSideNavBarStatus}) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div  data-aos-once="true" data-aos="fade-up" data-aos-duration="800" className={quoteStyles.container} onClick={() => setSideNavBarStatus(false)}>
      <img
        src={q1}
        alt={"quote"}
        className={quoteStyles.q1}
      />
      <div className={quoteStyles.quotes}>
        <div className={quoteStyles.quoteText}>The present is theirs; the future for which I really worked, is mine</div>
      </div>
      <img
        src={q2}
        alt={"quote"}
        className={quoteStyles.q2}
      />
    </div>
  )
}

export default Quotes
