import React, { useEffect, useState } from "react"
import ReactCardFlip from "react-card-flip";

import * as styles from "./demo.module.css";
import demoFront from "../../images/exEvents/7.jpg";
import demoBack from "../../images/exEvents/7_2.jpg";
import chordFront from "../../images/exEvents/8.jpg";
import chordBack from "../../images/exEvents/8_2.jpg";
import AOS from "aos"
import { StaticImage } from "gatsby-plugin-image"


const Demo = ({setSideNavBarStatus}) => {
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
        <div onClick={() => setSideNavBarStatus(false)} className={styles.container}>
          <div className={styles.eventsContainer}>
            <div data-aos-once="true" data-aos="fade-up" data-aos-duration="800" className={styles.eventContainer}>
              <div className={styles.header}>EX-DEMO</div>
              <div className={styles.cardsContainer}>
                <ReactCardFlip containerStyle={flipContainerStyles} cardStyles={styles.card} isFlipped={isFlipped.isFlipped1} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2} >
                  <div className={styles.card} onClick={() => setIsFlipped({isFlipped1:true})} onMouseOver={() => {setIsFlipped({isFlipped1:true});console.log("mouse entered");}}>
                    <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/7.jpg"} />
                  </div>

                  <div className={styles.card} onClick={() => setIsFlipped({isFlipped1:false})} onMouseLeave={() => {setIsFlipped({isFlipped1:false});console.log("mouse left");}}>
                    <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/7_2.jpg"} />
                  </div>
                </ReactCardFlip>
              </div>
            </div>
            <div data-aos-once="true" data-aos="fade-up" data-aos-duration="800" className={styles.eventContainer}>
              <div className={styles.header}>EX-CHORDS</div>
              <div className={styles.cardsContainer}>
                <ReactCardFlip containerStyle={flipContainerStyles} cardStyles={styles.card} isFlipped={isFlipped.isFlipped2} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2} >
                  <div className={styles.card} onClick={() => setIsFlipped({isFlipped2:true})} onMouseOver={() => {setIsFlipped({isFlipped2:true});console.log("mouse entered");}}>
                    <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/8.jpg"} />
                  </div>

                  <div className={styles.card} onClick={() => setIsFlipped({isFlipped2:false})} onMouseLeave={() => {setIsFlipped({isFlipped2:false});console.log("mouse left");}}>
                    <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/8_2.jpg"} />
                  </div>
                </ReactCardFlip>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Demo;
