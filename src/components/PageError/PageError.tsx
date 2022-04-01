import React from "react";
import "./pageError.scss";
import error from "../../img/error.jpg";
import { withRouter } from "react-router-dom";

const PageError = (props: any) => {
  const errorPath = (
    <span className="span-path">{props.location.pathname}</span>
  );
  return (
    <div className="container">
      <div className="img-wrapper">
        <img src={error} alt="404" />
        <div className="error-path">Page not found: {errorPath}</div>
      </div>
    </div>
  );
};

export default withRouter(PageError);
