import React from "react"
import Carousel from "./Carousel"
import MCarousel from "./mobile/MCarousel"
const Events = ({alumniRef, setSideNavBarStatus}) => {
  return (
    <div data-aos-once="true" data-aos="fade-up" data-aos-duration="800" ref={alumniRef} style={{ paddingTop: "8rem" }} onClick={() => setSideNavBarStatus(false)}>
      <Carousel />
      <MCarousel />
    </div>
  )
}

export default Events
