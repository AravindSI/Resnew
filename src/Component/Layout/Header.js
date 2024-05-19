import React, { Fragment } from "react";
import MealsImg from "../../assests/meals.jpeg";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </div>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="React project" />
      </div>
    </Fragment>
  );
};

export default Header;
