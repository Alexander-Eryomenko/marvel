import React from "react"
import { Heroes } from "../heroes"



export class Content extends React.Component {

  render() {
    return (
      
        <div className="container">
        <div className="main__content">
          <Heroes/>
        </div>
      </div>
      
    )
  }
}