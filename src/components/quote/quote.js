import React from 'react'
import * as quoteStyles from './quote.module.css';
import { StaticImage } from "gatsby-plugin-image"


import q1 from "../../images/quote1.svg";
import q2 from "../../images/quote2.svg";


function Quotes({setSideNavBarStatus}) {
  return (
    <div className={quoteStyles.container} onClick={() => setSideNavBarStatus(false)}>
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
