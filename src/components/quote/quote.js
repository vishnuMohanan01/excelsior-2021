import React from 'react'
import * as quoteStyles from './quote.module.css';
import { StaticImage } from "gatsby-plugin-image"


function Quotes() {
  return (
    <div className={quoteStyles.container}>
      <StaticImage
        src={"../../images/quote1.svg"}
        alt={"quote"}
        placeholder={"blurred"}
        width={188}
        height={180}
        className={quoteStyles.q1}
      />
      <div className={quoteStyles.quotes}>
        <p className={quoteStyles.quoteText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
      <StaticImage
        src={"../../images/quote2.svg"}
        alt={"quote"}
        placeholder={"blurred"}
        width={188}
        height={180}
        className={quoteStyles.q2}
      />
    </div>
  )
}

export default Quotes
