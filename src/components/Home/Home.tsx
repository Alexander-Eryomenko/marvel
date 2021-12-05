import React, {Component} from "react";
import { SearchPanel } from '../search-panel'
import { Heroes } from '../heroes'
import { ComicsPage } from "../ComicsPage";

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