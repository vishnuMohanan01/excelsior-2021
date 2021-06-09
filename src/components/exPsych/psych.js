import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import * as styles from "../exLearn/learn.module.css";
import psychFront from "../../images/exEvents/9.jpg";
import psychBack from "../../images/exEvents/9_2.jpg";
import scholarFront from "../../images/exEvents/10.jpg";
import scholarBack from "../../images/exEvents/10_2.jpg";

const Psych = ({psychRef, setSideNavBarStatus}) => {
    const [isFlipped, setIsFlipped] = useState({
        isFlipped1: false,
        isFlipped2: false
    });

    return (
        <div style={{marginBottom: "2rem"}}>
            <div className={styles.gridContainer1}>

                <div className={styles.gridItem1_1}>
                    <p className={styles.heading_1}>
                        <h2 className={styles.header_1}>Ex-psych</h2>
                    </p>
                    <div className={styles.card}>
                        <ReactCardFlip isFlipped={isFlipped.isFlipped1} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2}>
                            <div onClick={() => setIsFlipped({isFlipped1:true})} onMouseEnter={() => setIsFlipped({isFlipped1:true})}>
                               <img src={psychFront}></img>
                            </div>

                            <div onClick={() => setIsFlipped({isFlipped1:false})} onMouseLeave={() => setIsFlipped({isFlipped1:false})}>
                                <img src={psychBack}></img>
                            </div>
                        </ReactCardFlip>
                    </div>
                </div>

                <div className={styles.gridItem2_1}>
                    <p className={styles.heading_1}>
                        <h2 className={styles.header_1}>Ex-Scholar</h2>
                    </p>
                    <div className={styles.card}>
                        <ReactCardFlip isFlipped={isFlipped.isFlipped2} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2}>
                                <div onClick={() => setIsFlipped({isFlipped2:true})} onMouseEnter={() => setIsFlipped({isFlipped2:true})}>
                                   <img src={scholarFront}></img>
                                </div>

                                <div onClick={() => setIsFlipped({isFlipped2:false})} onMouseLeave={() => setIsFlipped({isFlipped2:false})}>
                                    <img src={scholarBack}></img>
                                </div>
                        </ReactCardFlip>
                    </div>
                </div>      

            </div>
        </div>
    )
}

export default Psych;
