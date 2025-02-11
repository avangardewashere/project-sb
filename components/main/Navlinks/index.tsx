import React from "react";
import style from "./index.module.scss";
const Navlinks = () => {
  return (
    <div className="flex text-black gap-2">
      <div className={style.navItem}>Home</div>
      <div className={style.navItem}>Products</div>
      <div className={style.navItem}>Membership</div>
      <div className={style.navItem}>Faqs</div>
    </div>
  );
};

export default Navlinks;
