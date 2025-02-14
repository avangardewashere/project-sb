import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
const ProductItem = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image alt="" src="/images/products/trial-ppack.webp" />
      </div>
      <div className={style.pdetails}>
        <p>Salveo Barley Grass Powder in Trial Pack (80grams)</p>

        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
