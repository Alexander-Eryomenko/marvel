import React from "react";
import './header.scss'
import logo from '../../img/marvel-logo.png'

export class Header extends React.Component {
  render() {
    return (
      
        <div className="header">
            <div className="container">
              <div className="header__img">
                <img src={logo} alt="Marvel logo" />
              </div>
            </div>
        </div>
      
    )
  }
}