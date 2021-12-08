import React, {Component} from "react";
import { Heroes } from '../heroes'
import './home.scss'

export class Home extends Component {

  render () {
    return (
      <React.Fragment>
          <main className="main">
            <Heroes />
          </main>
      </React.Fragment>

    )
  }
}