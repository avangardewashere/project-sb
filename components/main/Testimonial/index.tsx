import React from 'react'
import TestimonialCard from './card'
import style from "./index.module.scss"
const Testimonial = () => {
  return (
    <div className={style.container}>
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </div>
  )
}

export default Testimonial
