import React from 'react';
import * as faqStyles from "./faq.module.css";
import { StaticImage } from "gatsby-plugin-image"


const FAQ = () => {
  return (
    <div className={faqStyles.container}>
      <div className={faqStyles.headerContainer}>
        <StaticImage
          src={"../../images/faq-back.svg"}
          alt={"faq"}
          placeholder={"blurred"}
          width={299}
          height={125}
          className={faqStyles.headerBack}
        />
        <div className={faqStyles.headerText}>FAQ</div>
      </div>
      <div className={faqStyles.faqContainer}>
        <div className={faqStyles.faqLeft}>
          <div className={faqStyles.faqHead}>What is lorem ipsum ?</div>
          <div className={`${faqStyles.answerLeft} ${faqStyles.faqAnswer} `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        </div>
        <div className={faqStyles.faqRight}>
          <div className={faqStyles.faqHead}>What is lorem ipsum ?</div>
          <div className={`${faqStyles.answerRight} ${faqStyles.faqAnswer} `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        </div>
        <div className={faqStyles.faqLeft}>
          <div className={faqStyles.faqHead}>What is lorem ipsum ?</div>
          <div className={`${faqStyles.answerLeft} ${faqStyles.faqAnswer} `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
