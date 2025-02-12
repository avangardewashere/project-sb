import React from "react";
import style from "./index.module.scss";
const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.headline}>
        <div className={style.title}>OFFICIAL DISTRIBUTOR OF SALVEO BARLEY</div>
        <div className={style.description}>
          Salveo Barley Grass is a high-quality premium barley grass grown in
          pollution free environment. Proven and tested by thousands of users in
          the Philippines. It's the best and premium barley grass brand you'll
          ever find!
        </div>
      </div>
    </div>
  );
};

export default Hero;
