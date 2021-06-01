import React, { useState, useEffect, useRef } from "react"
import data from "./constants/Data"
import { Slider } from "./Slider"
import * as styles from "./events.module.css"
import Arrow from "../../images/arrow.svg"
import SectionImage from "../../images/Alumni/SectionImage.svg"
const Button = ({ rotate, styleName, clickFn }) => {
  return (
    <div className={styleName} onClick={clickFn}>
      <img
        src={Arrow}
        className={styles.btn}
        style={rotate ? { transform: "scaleX(-1)" } : {}}
      />
    </div>
  )
}

function Carousel() {
  const state = useRef(data)
  const [currentSlide, setCurrentSlide] = useState(0)
  const delay = useRef(4000)
  useEffect(() => {
    const { length } = state.current
    if (currentSlide < 0) {
      setCurrentSlide(length - 1)
    }
    if (currentSlide === length) {
      setCurrentSlide(0)
    }
  }, [currentSlide])

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentSlide(prevSlide => prevSlide + 1)
    }, delay.current)
    return () => {
      clearInterval(slider)
    }
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide(prevSlide => prevSlide + 1)
  }
  const prevSlide = () => {
    setCurrentSlide(prevSlide => prevSlide - 1)
  }
  return (
    <section className={styles.section}>
      <img src={SectionImage} className={styles.sectionImage} />
      <Button rotate="true" clickFn={prevSlide} styleName={styles.leftArrow} />
      <Button clickFn={nextSlide} styleName={styles.rightArrow} />
      <div className={styles.sectionCenter}>
        <Slider slides={state.current} currentSlide={currentSlide} />
      </div>
    </section>
  )
}

export default Carousel
