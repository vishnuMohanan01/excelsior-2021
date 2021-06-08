import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";

import * as styles from "../exLearn/learn.module.css"
import ai from "../../images/exEvents/1.jpg"
import block from "../../images/exEvents/2.jpg"
import circuit from "../../images/exEvents/3.jpg"


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
                            <div className={styles.card} onClick={() => setIsFlipped({isFlipped1:true})} onMouseEnter={() => setIsFlipped({isFlipped1:true})}>
                                <img src={ai}></img>
                            </div>

                            <div className={styles.card} onClick={() => setIsFlipped({isFlipped1:false})} onMouseLeave={() => setIsFlipped({isFlipped1:false})}>
                                <img src={ai}></img>
                            </div>
                    </ReactCardFlip>
                </div>

                <div className={styles.gridItem2}>
                    <ReactCardFlip isFlipped={isFlipped.isFlipped2} flipDirection="horizontal">
                            <div className={styles.card} onClick={() => setIsFlipped({isFlipped2:true})} onMouseEnter={() => setIsFlipped({isFlipped2:true})}>
                                <img src={block}></img>
                            </div>

                            <div className={styles.card} onClick={() => setIsFlipped({isFlipped2:false})} onMouseLeave={() => setIsFlipped({isFlipped2:false})}>
                                <img src={block}></img>
                            </div>
                    </ReactCardFlip>
                </div>

                <div className={styles.gridItem3}>
                    <ReactCardFlip isFlipped={isFlipped.isFlipped3} flipDirection="horizontal">
                            <div className={styles.card} onClick={() => setIsFlipped({isFlipped3:true})} onMouseEnter={() => setIsFlipped({isFlipped3:true})}>
                                <img src={circuit}></img>
                            </div>

                            <div className={styles.card} onClick={() => setIsFlipped({isFlipped3:false})} onMouseLeave={() => setIsFlipped({isFlipped3:false})}>
                                <img src={circuit}></img>
                            </div>
                    </ReactCardFlip>
                </div>
            </div> 
        </div>
    )
}

export default Learn;
