import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals3.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Shopping List</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        <button
          style={{
            cursor: "pointer",
            font: "inherit",
            border: "none",
            backgroundColor: "#015a53",
            color: "white",
            padding: "0.75rem 3rem",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: "25px",
            fontWeight: "bold",
          }}
          onClick= {(e) => props.handleSignOut(e)}
        >
          {" "}
          Sign Out
        </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
