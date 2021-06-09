import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import * as styles from "../exLearn/learn.module.css";
import demoFront from "../../images/exEvents/7.jpg";
import demoBack from "../../images/exEvents/7_2.jpg";
import chordFront from "../../images/exEvents/8.jpg";
import chordBack from "../../images/exEvents/8_2.jpg";

const Demo = ({demoRef, setSideNavBarStatus}) => {
    const [isFlipped, setIsFlipped] = useState({
        isFlipped1: false,
        isFlipped2: false
    });

    return (
        <div style={{marginBottom: "1.5rem"}}>
            <div className={styles.gridContainer1}>

                <div className={styles.gridItem1_1}>
                    <p className={styles.heading_1}>
                        <h2 className={styles.header_1}>Ex-Demo</h2>
                    </p>
                    <div className={styles.card}>
                        <ReactCardFlip isFlipped={isFlipped.isFlipped1} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2}>
                            <div onClick={() => setIsFlipped({isFlipped1:true})} onMouseEnter={() => setIsFlipped({isFlipped1:true})}>
                               <img src={demoFront}></img>
                            </div>

                            <div onClick={() => setIsFlipped({isFlipped1:false})} onMouseLeave={() => setIsFlipped({isFlipped1:false})}>
                                <img src={demoBack}></img>
                            </div>
                        </ReactCardFlip>
                    </div>
                </div>

                <div className={styles.gridItem2_1}>
                    <p className={styles.heading_1}>
                        <h2 className={styles.header_1}>Ex-Chords</h2>
                    </p>
                    <div className={styles.card}>
                        <ReactCardFlip isFlipped={isFlipped.isFlipped2} flipDirection="horizontal" flipSpeedFrontToBack={1.2} flipSpeedBackToFront={1.2}>
                                <div onClick={() => setIsFlipped({isFlipped2:true})} onMouseEnter={() => setIsFlipped({isFlipped2:true})}>
                                   <img src={chordFront}></img>
                                </div>

                                <div onClick={() => setIsFlipped({isFlipped2:false})} onMouseLeave={() => setIsFlipped({isFlipped2:false})}>
                                    <img src={chordBack}></img>
                                </div>
                        </ReactCardFlip>
                    </div>
                </div>      

            </div>
        </div> 
    )
}

export default Demo;
