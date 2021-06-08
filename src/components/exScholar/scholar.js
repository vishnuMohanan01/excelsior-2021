import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import * as styles from "../exLearn/learn.module.css"

const Demo = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div style={{marginBottom: "2rem", paddingTop:"4rem"}}>
            <p className={styles.heading}>
                <h2 className={styles.header}>Ex-Scholar</h2>
            </p>
            <div className={styles.container}>
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                            <div className={styles.card} onClick={() => setIsFlipped(true)} onMouseEnter={() => setIsFlipped(true)}>
                                <h3>AI Workshop</h3>
                                <a href={"https://www.google.com"} target={'_blank'} className={styles.btn}>
                                <span className={styles.btnText}>Register Now</span>
                            </a>
                            </div>

                            <div className={styles.card} onClick={() => setIsFlipped(false)} onMouseLeave={() => setIsFlipped(false)}>
                                <h3>BackSide</h3>
                                    <a href={"https://www.google.com"} target={'_blank'} className={styles.btn}>
                                    <span className={styles.btnText}>Register Now</span>
                                </a>
                            </div>
                    </ReactCardFlip>
                </div>
            </div> 
    )
}

export default Demo;
