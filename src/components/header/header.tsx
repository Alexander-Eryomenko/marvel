import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/marvel-logo.png";

import "./header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__img">
          <Link to="/">
            <img src={logo} alt="Marvel logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};
