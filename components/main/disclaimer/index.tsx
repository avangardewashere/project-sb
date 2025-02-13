import React from "react";
import style from "./index.module.scss";
const Disclaimer = () => {
  return (
    <div className={style.container}>
      <div className={style.headline}>Disclaimer</div>
      <p className={style.detailes}>
      Salveo Barley Grass is not a medicine. It is a natural and a whole food supplement that provides vitamins, minerals, amino acids, enzymes and other essential nutrients to the body. Any information here is not intended to diagnose any illness and is for educational purposes only. Expected results may vary depending on age, diet, body type, condition, habits & overall lifestyle of the user.
      </p>
      <p className={style.details}>
      Testimonials here are genuine and voluntarily given by the users. These are personal experiences as a result of their use of the product and should not be taken as a medical advice nor be treated as a scientific evidence. If symptoms persist, consult your physician.
      </p>
    </div>
  );
};

export default Disclaimer;
