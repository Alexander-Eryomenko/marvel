import React from "react"
import './page2.scss'
import testimg from '../../img/test1.png'

export class Page2 extends React.Component {



  render() {
    return (
      <div className="container">
        <p className="page2__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla molestias impedit porro saepe, quia veniam accusamus similique dolorem omnis laudantium veritatis animi eius totam voluptate aspernatur recusandae, odio nostrum?
      </p>
      <div className="page2__img">
        <img src={testimg} alt="test1" />
      </div>
      </div>
    )
  }
}