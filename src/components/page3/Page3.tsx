import React from "react"
import './page3.scss'
import testOlen from '../../img/testOlen.jpg'

export class Page3 extends React.Component {

  render() {
    return (
      <div className="container">
        <p className="page3__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sequi iste perferendis illo iusto nisi officiis mollitia blanditiis vero non reiciendis ipsa quas aliquam, nesciunt nihil nulla. Porro, perspiciatis ipsum!
      </p>
      <div className="page3__img">
        <img src={testOlen} alt="test1" />
      </div>
      </div>
    )
  }
}