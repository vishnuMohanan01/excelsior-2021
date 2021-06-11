import React, { useEffect, useState } from "react"
import ReactCardFlip from "react-card-flip";

import * as styles from "../exLearn/learn.module.css"
import t1Front from "../../images/exEvents/4.jpg"
import t1Back from "../../images/exEvents/4_2.jpg"
import t2Front from "../../images/exEvents/5.jpg";
import t2Back from "../../images/exEvents/5_2.jpg";
import t3Front from "../../images/exEvents/6.jpg";
import t3Back from "../../images/exEvents/6_2.jpg";
import AOS from "aos"
import { StaticImage } from "gatsby-plugin-image"


const Talks = ({setSideNavBarStatus}) => {
  useEffect(() => {
    AOS.init();
  }, []);


    const [isFlipped, setIsFlipped] = useState({
        isFlipped1: false,
        isFlipped2: false,
        isFlipped3: false
    });

    const flipContainerStyles = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    };

    return (
      <div onClick={() => setSideNavBarStatus(false)} data-aos-once="true" data-aos="fade-up" data-aos-duration="800" className={styles.container}>
        <div className = {styles.header}>EX-TALKS</div>
        <div className = {styles.cardsContainer}>
          <ReactCardFlip containerStyle={flipContainerStyles} cardStyles={styles.card} isFlipped={isFlipped.isFlipped1} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2} >
            <div className={styles.card} onClick={() => setIsFlipped({isFlipped1:true})} onMouseOver={() => {setIsFlipped({isFlipped1:true});console.log("mouse entered");}}>
              <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/4.jpg"} />
            </div>

            <div className={styles.card} onClick={() => setIsFlipped({isFlipped1:false})} onMouseLeave={() => {setIsFlipped({isFlipped1:false});console.log("mouse left");}}>
              <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/4_2.jpg"} />
            </div>
          </ReactCardFlip>

          <ReactCardFlip containerStyle={flipContainerStyles} isFlipped={isFlipped.isFlipped2} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2} >
            <div className={styles.card} onClick={() => setIsFlipped({isFlipped2:true})} onMouseOver={() => setIsFlipped({isFlipped2:true})}>
              <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/5.jpg"} />
            </div>

            <div className={styles.card} onClick={() => setIsFlipped({isFlipped2:false})} onMouseLeave={() => setIsFlipped({isFlipped2:false})}>
              <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/5_2.jpg"} />
            </div>
          </ReactCardFlip>

          <ReactCardFlip containerStyle={flipContainerStyles} isFlipped={isFlipped.isFlipped3} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2} >
            <div className={styles.card} onClick={() => setIsFlipped({isFlipped3:true})} onMouseOver={() => setIsFlipped({isFlipped3: true})}>
              <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/6.jpg"} />
            </div>

            <div className={styles.card} onClick={() => setIsFlipped({isFlipped3:false})} onMouseLeave={() => setIsFlipped({isFlipped3: false})}>
              <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/6_2.jpg"} />
            </div>
          </ReactCardFlip>
        </div>
      </div>
    )
}

export default Talks;
