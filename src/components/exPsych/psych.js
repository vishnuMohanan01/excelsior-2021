import React, { useEffect, useState } from "react"
import ReactCardFlip from "react-card-flip";

import * as styles from "../exDemo/demo.module.css";
// import psychFront from "../../images/exEvents/9.jpg";
// import psychBack from "../../images/exEvents/9_2.jpg";
// import scholarFront from "../../images/exEvents/10.jpg";
// import scholarBack from "../../images/exEvents/10_2.jpg";
import AOS from "aos"
import { StaticImage } from "gatsby-plugin-image"

const Psych = ({setSideNavBarStatus}) => {
  useEffect(() => {
    AOS.init();
  }, []);
    const [isFlipped, setIsFlipped] = useState({
        isFlipped1: false,
        isFlipped2: false
    });

  const flipContainerStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  };

    return (
      <div onClick={() => setSideNavBarStatus(false)} data-aos-once="true" data-aos="fade-up" data-aos-duration="800" className={styles.container}>
        <div className={styles.eventsContainer}>
          <div data-aos-once="true" data-aos="fade-up" data-aos-duration="800" className={styles.eventContainer}>
            <div className={styles.header}>EX-PSYCH</div>
            <div className={styles.cardsContainer}>
              <ReactCardFlip containerStyle={flipContainerStyles} cardStyles={styles.card} isFlipped={isFlipped.isFlipped1} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2} >
                <div className={styles.card} onClick={() => setIsFlipped({isFlipped1:true})} onMouseOver={() => {setIsFlipped({isFlipped1:true});console.log("mouse entered");}}>
                  <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/9.jpg"} />
                </div>

                <div className={styles.card} onClick={() => setIsFlipped({isFlipped1:false})} onMouseLeave={() => {setIsFlipped({isFlipped1:false});console.log("mouse left");}}>
                  <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/9_2.jpg"} />
                </div>
              </ReactCardFlip>
            </div>
          </div>
          <div data-aos-once="true" data-aos="fade-up" data-aos-duration="800" className={styles.eventContainer}>
            <div className={styles.header}>EX-SCHOLAR</div>
            <div className={styles.cardsContainer}>
              <ReactCardFlip containerStyle={flipContainerStyles} cardStyles={styles.card} isFlipped={isFlipped.isFlipped2} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2} >
                <div className={styles.card} onClick={() => setIsFlipped({isFlipped2:true})} onMouseOver={() => {setIsFlipped({isFlipped2:true});console.log("mouse entered");}}>
                  <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/10.jpg"} />
                </div>

                <div className={styles.card} onClick={() => setIsFlipped({isFlipped2:false})} onMouseLeave={() => {setIsFlipped({isFlipped2:false});console.log("mouse left");}}>
                  <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/10_2.jpg"} />
                </div>
              </ReactCardFlip>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Psych;
