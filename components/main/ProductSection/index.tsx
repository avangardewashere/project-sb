import React from "react";
import style from "./index.module.scss";
const ProductSection = () => {
  return (
    <div className={style.container}>
      <div className={style.headline}>
        <h2>OUR PRODUCTS</h2>
        <div className={style.certified}>Salveo Barley Grass is Certified:</div>
        <div>Gluten Free. 100% Natural & Organic. FDA Approved. Halal Approved.</div>
      </div>
    </div>
  );
};

export default ProductSection;
