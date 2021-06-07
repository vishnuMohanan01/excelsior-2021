import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";

import * as styles from "../exLearn/learn.module.css"

const Learn = () => {
    const [isFlipped, setIsFlipped] = useState({
        isFlipped1: false,
        isFlipped2: false,
        isFlipped3: false
    });

    return (
        <div style={{marginBottom: "2rem", paddingTop:"4rem"}}>
            <p className={styles.heading}>
                <h2 className={styles.header}>Ex-Learn</h2>
            </p>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem1}>
                    <ReactCardFlip isFlipped={isFlipped.isFlipped1} flipDirection="horizontal">
                            <div className={styles.card} onMouseEnter={() => setIsFlipped({isFlipped1:true})}>
                                <h3>AI Workshop</h3>
                                <a href={"https://www.google.com"} target={'_blank'} className={styles.btn}>
                                <span className={styles.btnText}>Register Now</span>
                            </a>
                            </div>

                            <div className={styles.card} onMouseLeave={() => setIsFlipped({isFlipped1:false})}>
                                <h3>BackSide</h3>
                                    <a href={"https://www.google.com"} target={'_blank'} className={styles.btn}>
                                    <span className={styles.btnText}>Register Now</span>
                                </a>
                            </div>
                    </ReactCardFlip>
                </div>

                <div className={styles.gridItem2}>
                    <ReactCardFlip isFlipped={isFlipped.isFlipped2} flipDirection="horizontal">
                            <div className={styles.card} onMouseEnter={() => setIsFlipped({isFlipped2:true})}>
                                <h3>AI Workshop</h3>
                                <a href={"https://www.google.com"} target={'_blank'} className={styles.btn}>
                                <span className={styles.btnText}>Register Now</span>
                            </a>
                            </div>

                            <div className={styles.card} onMouseLeave={() => setIsFlipped({isFlipped2:false})}>
                                <h3>BackSide</h3>
                                    <a href={"https://www.google.com"} target={'_blank'} className={styles.btn}>
                                    <span className={styles.btnText}>Register Now</span>
                                </a>
                            </div>
                    </ReactCardFlip>
                </div>

                <div className={styles.gridItem3}>
                    <ReactCardFlip isFlipped={isFlipped.isFlipped3} flipDirection="horizontal">
                            <div className={styles.card} onMouseEnter={() => setIsFlipped({isFlipped3:true})}>
                                <h3>AI Workshop</h3>
                                <a href={"https://www.google.com"} target={'_blank'} className={styles.btn}>
                                <span className={styles.btnText}>Register Now</span>
                            </a>
                            </div>

                            <div className={styles.card} onMouseLeave={() => setIsFlipped({isFlipped3:false})}>
                                <h3>BackSide</h3>
                                    <a href={"https://www.google.com"} target={'_blank'} className={styles.btn}>
                                    <span className={styles.btnText}>Register Now</span>
                                </a>
                            </div>
                    </ReactCardFlip>
                </div>
            </div> 
        </div>
    )
}

export default Learn;
