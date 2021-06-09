import React from "react";
import * as footerStyles from "./footer.module.css";

import exLogo from "../../images/footer/ex-logo.svg";
import instaImg from "../../images/footer/insta.svg";
import linkedInImg from "../../images/footer/linkedin.svg";
import instaImgWhite from "../../images/footer/instaWhite.svg";
import linkedInImgWhite from "../../images/footer/linkedInWhite.svg";

const Footer = () => {
  return (
    <div data-aos-once="true" data-aos="fade-up" data-aos-duration="800" className={footerStyles.container}>
      <div className={`${footerStyles.division} ${footerStyles.one} ${footerStyles.desktopVersion}`}>
        <div className={footerStyles.divisionHead}>
          <a href="/" className={footerStyles.exLogoLink}>
            <img
              src={exLogo}
              alt="ex"
              className={footerStyles.exLogo}
            />
          </a>
          <div className={footerStyles.excelsiorHead}>Excelsior'21</div>
        </div>
        <div className={footerStyles.rightsReserved}>
          © 2021. IEEE SB GEC Palakkad. All Rights Reserved.
        </div>
      </div>
      <div className={`${footerStyles.division} ${footerStyles.two}`}>
        <div className={footerStyles.sbChapters}>
          SB Chapters
        </div>
        <div className={footerStyles.societyContainer}>
          <div className={footerStyles.societyHead}>Computer Society</div>
          <div className={footerStyles.socialIcons}>
            <a href="https://instagram.com/ieeecsgecpkd?igshid=1tf9nzps6ta1a" target={"_blank"}>
              <img
                src={instaImg}
                alt="insta"
                className={footerStyles.instaImg}
              />
            </a>
            <a href="https://www.linkedin.com/company/ieee-cs-sbc-gec-palakkad" target={"_blank"}>
              <img
                src={linkedInImg}
                alt="linkedIn"
                className={footerStyles.linkedInImg}
              />
            </a>
          </div>
        </div>
        <div className={footerStyles.societyContainer}>
          <div className={footerStyles.societyHead}>Industry Application Society</div>
          <div className={footerStyles.socialIcons}>
            <a href="https://instagram.com/ieeeiasgecpkd?igshid=e2x3fsk0l050" target={"_blank"}>
              <img
                src={instaImg}
                alt="insta"
                className={footerStyles.instaImg}
              />
            </a>
            <a href="https://www.linkedin.com/company/ias-sb-chapter-gec-palakkad" target={"_blank"}>
              <img
                src={linkedInImg}
                alt="linkedIn"
                className={footerStyles.linkedInImg}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={`${footerStyles.division} ${footerStyles.three}`}>
        <div className={footerStyles.sbChapters}>
          Affinity Groups
        </div>
        <div className={footerStyles.societyContainer}>
          <div className={footerStyles.societyHead}>Women In Engineering</div>
          <div className={footerStyles.socialIcons}>
            <a href="https://instagram.com/wie_gec_palakkad?igshid=awb71kltqp3u" target={"_blank"}>
              <img
                src={instaImg}
                alt="insta"
                className={footerStyles.instaImg}
              />
            </a>
            <a href="https://www.linkedin.com/company/ieee-wie-gec-palakkad" target={"_blank"}>
              <img
                src={linkedInImg}
                alt="linkedIn"
                className={footerStyles.linkedInImg}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={`${footerStyles.division} ${footerStyles.four}`}>
        <div className={footerStyles.sbChapters}>
          Get In Touch
        </div>
        <div className={footerStyles.societyContainer}>
          <div className={`${footerStyles.societyHead} ${footerStyles.sbContent}`}>Questions or Feedbacks ?<br />We'd love to hear from you.</div>
          <div className={`${footerStyles.socialIcons} ${footerStyles.sbIcons}`}>
            <a href="https://instagram.com/ieeesbgecpkd?igshid=czunhnx522u2" target={"_blank"}>
              <img
                src={instaImgWhite}
                alt="insta"
                className={footerStyles.instaImgSB}
              />
            </a>
            <a href="https://www.linkedin.com/company/ieeesbgecpkd"  target={"_blank"}>
              <img
                src={linkedInImgWhite}
                alt="linkedIn"
                className={footerStyles.linkedInImgSB}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
