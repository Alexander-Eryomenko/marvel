import React from "react";
import './pageError.scss'
import error from '../../img/error.jpg'

export const PageError = () => {
  return (
    <div className="container">
      <div className="img-wrapper">
        <img src={error} alt="404" />
      </div>
    </div>
  )
}