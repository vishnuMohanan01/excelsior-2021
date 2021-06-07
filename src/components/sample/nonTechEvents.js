import * as React from "react";
import * as eventStyles from "./techEvents.module.css"

const nonTechEvents = () => {
    return (
        <div>
            <p className={eventStyles.heading}>
                <h2 className={eventStyles.header}>Non-Technical</h2>
                <h3 className={eventStyles.subHeader}>Events</h3>
            </p>
            <div className={eventStyles.gridContainer}>
                <div className={eventStyles.gridItem1}>
                    <div className={eventStyles.card}>
                    <div className={eventStyles.cardInner}>
                        <div className={eventStyles.cardFront}>
                            <h1>Hello</h1>
                        </div>
                        <div className={eventStyles.cardBack}>
                            <a href={"https://www.google.com"} target={'_blank'} className={eventStyles.btn}>
                                <span className={eventStyles.btnText}>Register Now</span>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div> 
        </div>
    )
}

export default nonTechEvents;
