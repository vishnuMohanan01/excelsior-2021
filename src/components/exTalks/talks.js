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


const Talks = ({setSideNavBarStatus}) => {
  useEffect(() => {
    AOS.init();
  }, []);
    const [isFlipped, setIsFlipped] = useState({
        isFlipped1: false,
        isFlipped2: false,
        isFlipped3: false
    });

    return (
        <div  onClick={() => {setSideNavBarStatus(false);}} data-aos-once="true" data-aos="fade-up" data-aos-duration="800"  style={{marginBottom: "1.5rem"}}>
            <p className={styles.heading}>
                <h2 className={styles.header}>EX-TALKS</h2>
            </p>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem1}>
                    <div className={styles.card}>
                    <ReactCardFlip isFlipped={isFlipped.isFlipped1} flipDirection="horizontal"flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2}>
                            <div onClick={() => setIsFlipped({isFlipped1:true})} onMouseEnter={() => setIsFlipped({isFlipped1:true})}>
                                <img className={styles.cardImage} src={t1Front}></img>
                            </div>

                            <div onClick={() => setIsFlipped({isFlipped1:false})} onMouseLeave={() => setIsFlipped({isFlipped1:false})}>
                                <img className={styles.cardImage} src={t1Back}></img>
                            </div>
                    </ReactCardFlip>
                    </div>
                </div>

                <div className={styles.gridItem2}>
                <div className={styles.card}>
                    <ReactCardFlip isFlipped={isFlipped.isFlipped2} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2}>
                            <div onClick={() => setIsFlipped({isFlipped2:true})} onMouseEnter={() => setIsFlipped({isFlipped2:true})}>
                                <img  className={styles.cardImage} src={t2Front}></img>
                            </div>

                            <div onClick={() => setIsFlipped({isFlipped2:false})} onMouseLeave={() => setIsFlipped({isFlipped2:false})}>
                                <img  className={styles.cardImage} src={t2Back}></img>
                            </div>
                    </ReactCardFlip>
                    </div>
                </div>

                <div className={styles.gridItem3}>
                <div className={styles.card}>
                    <ReactCardFlip isFlipped={isFlipped.isFlipped3} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2}>
                            <div onClick={() => setIsFlipped({isFlipped3:true})} onMouseEnter={() => setIsFlipped({isFlipped3:true})}>
                                <img  className={styles.cardImage} src={t3Front}></img>
                            </div>

                            <div onClick={() => setIsFlipped({isFlipped3:false})} onMouseLeave={() => setIsFlipped({isFlipped3:false})}>
                                <img className={styles.cardImage} src={t3Back}></img>
                            </div>
                    </ReactCardFlip>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Talks;
