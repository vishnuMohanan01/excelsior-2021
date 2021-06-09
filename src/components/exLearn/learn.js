import React, { useEffect, useState } from "react"
import ReactCardFlip from "react-card-flip";

import * as styles from "../exLearn/learn.module.css";
import aiFront from "../../images/exEvents/1.jpg";
import aiBack from "../../images/exEvents/1_2.jpg";
import blockFront from "../../images/exEvents/2.jpg";
import blockBack from "../../images/exEvents/2_2.jpg";
import circuitFront from "../../images/exEvents/3.jpg";
import circuitBack from "../../images/exEvents/3_2.jpg";
import AOS from "aos"


const Learn = ({learnRef, setSideNavBarStatus}) => {
  useEffect(() => {
    AOS.init();
  }, []);

    const [isFlipped, setIsFlipped] = useState({
        isFlipped1: false,
        isFlipped2: false,
        isFlipped3: false
    });

    return (
        <div ref={learnRef} onClick={() => {setSideNavBarStatus(false);}} data-aos-once="true" data-aos="fade-up" data-aos-duration="800" style={{paddingBottom: "1.5rem", paddingTop:"4rem"}}>
            <p className={styles.heading}>
                <h2 className={styles.header}>EX-LEARN</h2>
            </p>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem1}>
                    <div className={styles.card}>
                    <ReactCardFlip isFlipped={isFlipped.isFlipped1} flipDirection="horizontal"flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2} >
                            <div onClick={() => setIsFlipped({isFlipped1:true})} onMouseEnter={() => setIsFlipped({isFlipped1:true})}>
                                <img  className={styles.cardImage} src={aiFront} />
                            </div>

                            <div onClick={() => setIsFlipped({isFlipped1:false})} onMouseLeave={() => setIsFlipped({isFlipped1:false})}>
                                <img className={styles.cardImage} src={aiBack} />
                            </div>
                    </ReactCardFlip>
                    </div>
                </div>

                <div className={styles.gridItem2}>
                <div className={styles.card}>
                    <ReactCardFlip isFlipped={isFlipped.isFlipped2} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2}>
                            <div onClick={() => setIsFlipped({isFlipped2:true})} onMouseEnter={() => setIsFlipped({isFlipped2:true})}>
                                <img className={styles.cardImage} src={blockFront} />
                            </div>

                            <div onClick={() => setIsFlipped({isFlipped2:false})} onMouseLeave={() => setIsFlipped({isFlipped2:false})}>
                                <img  className={styles.cardImage} src={blockBack} />
                            </div>
                    </ReactCardFlip>
                    </div>
                </div>

                <div className={styles.gridItem3}>
                <div className={styles.card}>
                    <ReactCardFlip isFlipped={isFlipped.isFlipped3} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2}>
                            <div onClick={() => setIsFlipped({isFlipped3:true})} onMouseEnter={() => setIsFlipped({isFlipped3:true})}>
                                <img  className={styles.cardImage} src={circuitFront} />
                            </div>

                            <div onClick={() => setIsFlipped({isFlipped3:false})} onMouseLeave={() => setIsFlipped({isFlipped3:false})}>
                                <img className={styles.cardImage} src={circuitBack} />
                            </div>
                    </ReactCardFlip>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Learn;
