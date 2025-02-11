import React from "react";
import style from "./index.module.scss";
import clsx from "clsx";
const Navlinks = () => {
  return (
    <div className={clsx("flex text-black gap-2",style.navlinks)}>
      <div className={style.navItem}>Home</div>
      <div className={style.navItem}>Products</div>
      <div className={style.navItem}>Membership</div>
      <div className={style.navItem}>Faqs</div>
    </div>
  );
};

export default Navlinks;
