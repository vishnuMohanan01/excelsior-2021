import * as React from "react";
import * as styles from "../exLearn/learn.module.css"

const scholar = () => {
    return (
        <div>
            <p className={styles.heading}>
                <h2 className={styles.header}>Non-Technical</h2>
                <h3 className={styles.subHeader}>Events</h3>
            </p>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem1}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            
                        </div>
                        <div className={styles.cardBack}>
                            <a href={"https://www.google.com"} target={'_blank'} className={styles.btn}>
                                <span className={styles.btnText}>Register Now</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.gridItem2}>
                    <div className={styles.card}>
                        <a href={"https://www.google.com"} target={'_blank'} className={styles.btn}>
                            <span className={styles.btnText}>Register Now</span>
                        </a>
                    </div>
                </div>

                <div className={styles.gridItem3}>
                    <div className={styles.card}>
                        <a href={"https://www.google.com"} target={'_blank'} className={styles.btn}>
                            <span className={styles.btnText}>Register Now</span>
                        </a>
                    </div>
                </div>

                <div className={styles.gridItem4}>
                    <div className={styles.card}>
                        <a href={"https://www.google.com"} target={'_blank'} className={styles.btn}>
                            <span className={styles.btnText}>Register Now</span>
                        </a>
                    </div>
                </div>

                <div className={styles.gridItem5}>
                    <div className={styles.card}>
                        <a href={"https://www.google.com"} target={'_blank'} className={styles.btn}>
                            <span className={styles.btnText}>Register Now</span>
                        </a>
                    </div>
                </div>

                <div className={styles.gridItem6}>
                    <div className={styles.card}>
                        <a href={"https://www.google.com"} target={'_blank'} className={styles.btn}>
                            <span className={styles.btnText}>Register Now</span>
                        </a>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default scholar;
