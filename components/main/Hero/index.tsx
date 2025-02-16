import React from "react";
import style from "./index.module.scss";
const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.headline}>
        <div className={style.title}>OFFICIAL DISTRIBUTOR OF SALVEO BARLEY</div>
        <div className={style.description}>
          <b>Salveo Barley Grass</b> is a high-quality premium barley grass grown in
          pollution free environment. Proven and tested by thousands of users in
          the Philippines. It's the best and premium barley grass brand you'll
          ever find!
        </div>
      </div>

      <div className={style.button}>
       SHOP NOW
      </div>
    </div>
  );
};

export default Hero;
