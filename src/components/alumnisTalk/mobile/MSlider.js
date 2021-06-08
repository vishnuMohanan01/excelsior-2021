import React from "react"
import * as styles from "./mobile.module.css"

export const MSlider = ({ slides, currentSlide }) => {
  return (
    <>
      {slides.map(({ id, image }, index) => {
        return (
          <div
            key={id * index + 1}
            className={`${
              index === currentSlide
                ? `${styles.slide} ${styles.activeSlide} `
                : index - currentSlide === -1 ||
                  (index === slides.length - 1 && currentSlide === 0)
                ? `${styles.slide} ${styles.lastSlide}`
                : ` ${styles.slide} ${styles.nextSlide}`
            }`}
          >
            <img src={image} className={styles.image} />
          </div>
        )
      })}
    </>
  )
}
