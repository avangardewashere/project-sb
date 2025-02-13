import React from 'react'
import style from "./index.module.scss"
const ProductItem = () => {
  return (
    <div className={style.container}>
        {/* Image */}
        <div className={style.pdetails}>
           <p>Salveo Barley Grass Powder in Trial Pack (80grams)</p>

           <button>
            Add to Cart
           </button>
        </div>
    </div>
  )
}

export default ProductItem
