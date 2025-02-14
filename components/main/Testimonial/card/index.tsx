import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
const TestimonialCard = () => {
  return (
    <div className={style.container}>
      <Image src="/images/people/test1.webp" alt="" />
      <p className={style.details}></p>
    </div>
  );
};

export default TestimonialCard;
