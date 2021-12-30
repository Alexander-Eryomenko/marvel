import React from "react";
import "./pageError.scss";
import error from "../../img/error.jpg";
import { useLocation } from "react-router-dom";

const PageError = () => {
  const location = useLocation();
  const errorPath = <span className="span-path">{location.pathname}</span>;
  return (
    <div className="container">
      <div className="img-wrapper">
        <img src={error} alt="404" />
        <div className="error-path">Page not found: {errorPath}</div>
      </div>
    </div>
  );
};

export default PageError;
