import React, { useEffect, useState } from "react"
import ReactCardFlip from "react-card-flip";

import * as styles from "./learn.module.css";
// import aiFront from "../../images/exEvents/1.jpg";
// import aiBack from "../../images/exEvents/1_2.jpg";
// import blockFront from "../../images/exEvents/2.jpg";
// import blockBack from "../../images/exEvents/2_2.jpg";
// import circuitFront from "../../images/exEvents/3.jpg";
// import circuitBack from "../../images/exEvents/3_2.jpg";
import AOS from "aos"
import { StaticImage } from "gatsby-plugin-image"


const Learn = ({learnRef, setSideNavBarStatus}) => {
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
        <div style={{paddingTop: "8rem"}} onClick={() => setSideNavBarStatus(false)} data-aos-once="true" data-aos="fade-up" data-aos-duration="800" ref={learnRef} className={styles.container}>
          <div className={styles.header}>EX-LEARN</div>
          <div className={styles.cardsContainer}>
            <ReactCardFlip containerStyle={flipContainerStyles} cardStyles={styles.card} isFlipped={isFlipped.isFlipped1} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2} >
               <div className={styles.card} onClick={() => setIsFlipped({isFlipped1:true})} onMouseOver={() => {setIsFlipped({isFlipped1:true});console.log("mouse entered");}}>
                 <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/1.jpg"} />
               </div>

               <div className={styles.card} onClick={() => setIsFlipped({isFlipped1:false})} onMouseLeave={() => {setIsFlipped({isFlipped1:false});console.log("mouse left");}}>
                 <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/1_2.jpg"} />
               </div>
             </ReactCardFlip>

            <ReactCardFlip containerStyle={flipContainerStyles} isFlipped={isFlipped.isFlipped2} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2} >
              <div className={styles.card} onClick={() => setIsFlipped({isFlipped2:true})} onMouseOver={() => setIsFlipped({isFlipped2:true})}>
                <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/2.jpg"} />
              </div>

              <div className={styles.card} onClick={() => setIsFlipped({isFlipped2:false})} onMouseLeave={() => setIsFlipped({isFlipped2:false})}>
                <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/2_2.jpg"} />
              </div>
            </ReactCardFlip>

            <ReactCardFlip containerStyle={flipContainerStyles} isFlipped={isFlipped.isFlipped3} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2} >
              <div className={styles.card} onClick={() => setIsFlipped({isFlipped3:true})} onMouseOver={() => setIsFlipped({isFlipped3: true})}>
                <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/3.jpg"} />
              </div>

              <div className={styles.card} onClick={() => setIsFlipped({isFlipped3:false})} onMouseLeave={() => setIsFlipped({isFlipped3: false})}>
                <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/3_2.jpg"} />
              </div>
            </ReactCardFlip>
          </div>
        </div>
    )
}

export default Learn;


// <ReactCardFlip isFlipped={isFlipped.isFlipped1} flipDirection="horizontal"flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2} >
//   <div onClick={() => setIsFlipped({isFlipped1:true})} onMouseEnter={() => setIsFlipped({isFlipped1:true})}>
//     <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/1.jpg"} />
//   </div>
//
//   <div onClick={() => setIsFlipped({isFlipped1:false})} onMouseLeave={() => setIsFlipped({isFlipped1:false})}>
//     <StaticImage alt={"AI - Image"} placeholder={"blurred"} className={styles.cardImage} src={"../../images/exEvents/1_2.jpg"} />
//   </div>
// </ReactCardFlip>
