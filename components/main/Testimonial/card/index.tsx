import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
const TestimonialCard = () => {
  return (
    <div className={style.container}>
      <Image width={80} height={80} src="/images/people/test1.webp" alt="" />
      <p className={style.details}>
      Bukol sa dibdib | Paulina Policarpio
      "Pagkaraan ng tatlong buwan na tuloy-tuloy kong pag-inom ng Salveo ay nawala ung mga bukol nanakakapa ko sa aking breast. Nakakatuwa, ang galing ni Salveo kaya tinuloy-tuloy ko ang pag-inom hanggang ngayon. Malakas ang katawan ko, di ako dinadapuan ng ubo at sipon."
      </p>
      
    </div>
  );
};

export default TestimonialCard;
