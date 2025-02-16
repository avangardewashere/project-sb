import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import Navlinks from "../Navlinks";
import NotifBar from "./bar";
const Header = () => {
  return (
    <div className={style.header}>
      <NotifBar/>
      {/* main */}
      <div className={style.main}>
        <Image src={"/images/SB-Logo.webp"} alt="logo" height={60} width={60} />
        <div className={style.actions}>
          <div>cart</div>
          <div>search</div>
        </div>
      </div>
      {/* nav links */}
      <Navlinks />
    </div>
  );
};

export default Header;
