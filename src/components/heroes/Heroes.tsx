import React from "react"
import './heroes.scss'

export class Heroes extends React.Component {
  render() {
    return (
      <div className="heroes">

          <div className="heroes__avatar">
            <img src="" alt="avatar" />
          </div>

          <div className="heroes__info">
            <span>sdcsdc</span>
          </div>

          <div className="heroes__btn">
            <button>See more bin</button>
          </div>
        
      </div>
    )
  }
}