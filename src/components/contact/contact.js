import * as React from "react";
import * as contactStyles from "./contact.module.css";
import { StaticImage } from "gatsby-plugin-image"
import { useForm, ValidationError } from '@formspree/react';


import excelsiorImg from "../../images/contact-excelsior21.svg";

const Contact = ({contactRef, setSideNavBarStatus}) => {
  const [state, handleSubmit] = useForm("xoqydldj");
  if (state.succeeded) {
    // TODO: show some response
  }

  return (
    <div className={contactStyles.container} ref={contactRef} onClick={() => setSideNavBarStatus(false)} >
      <div className={contactStyles.leftContainer}>
        <div className={contactStyles.leftHeader}>
          <div className={contactStyles.leftHeaderText}>Team</div>
          <img
            src={excelsiorImg}
            alt={"excelsior21"}
            className={contactStyles.leftHeadExcelsior21}
          />
        </div>
        <div className={contactStyles.detailsContainer}>
          <div className={contactStyles.detailsHeader}>Contact Us</div>
          <div className={contactStyles.details}>
            <div className={contactStyles.detail}>
              <div className={contactStyles.detailsName}>Aswathi M</div>
              <div className={contactStyles.detailsNumber}>+91 9400 148 197</div>
            </div>
            <div className={contactStyles.detail}>
              <div className={contactStyles.detailsName}>Reva S</div>
              <div className={contactStyles.detailsNumber}>+91 9497 063 570</div>
            </div>
          </div>
        </div>
      </div>
      <div className={contactStyles.rightContainer}>
        <div className={contactStyles.rightHeader}>
          <div className={contactStyles.enquiryHead}>Enquiry</div>
          <div className={contactStyles.enquiryText}>Stick to us if you have any queries. We don't want you have any concerns. Our volunteer will get in touch with you as early as possible.
          </div>
        </div>
        <form className={contactStyles.formContainer} onSubmit={handleSubmit} >
          <div className={contactStyles.formEntity}>
            <div className={contactStyles.entityHead}>Email</div>
            <input type={'email'} name={"email"} className={contactStyles.inputText} />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className={contactStyles.formEntity}>
            <div className={contactStyles.entityHead}>Query</div>
            <textarea
              className={contactStyles.inputTextArea}
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className={contactStyles.submitButton} type="submit" disabled={state.submitting}>Enquire</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
