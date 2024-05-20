import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <Link to="/" className={`${style.logo} ${style.link}`}>
          ARANOZ.
        </Link>
        <div className={style.links}>
          <Link to="/" className={` ${style.link}`}>
            Home
          </Link>
          <Link to="shop" className={` ${style.link}`}>
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
