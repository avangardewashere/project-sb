import Image from 'next/image'
import React from 'react'
import style from "./index.module.scss"
const CoverImage = () => {
  return (
    <div className={style.coverContainer}>
      <Image fill alt="cover-image" src="/images/cover-image.webp"/>
    </div>
  )
}

export default CoverImage
