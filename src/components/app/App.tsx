import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import './app.scss'
import { Header } from '../header'
import { SearchPanel } from '../search-panel'
import { Content } from "../content"
import { Page2 } from "../page2"
import { Page3 } from '../page3'

const Btn = () => {
  return (
    <div className="btn-pages container">
      <Link className="btn-pages__link" to="/page2/:4">Page2</Link>
      <Link className="btn-pages__link btn-pages__link-page3" to="/page3">Page3</Link>
    </div>
  )
}


export class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
        <Header/>
        </div>
        <SearchPanel/>
          <main className="main">
          <Content/>
            <div className="page">
              
              <Router>
              <Btn/>
                <Switch>
                  <Route path="/page2" component={Page2} />
                  <Route path="/page3" component={Page3} />
                </Switch>
              </Router>
            </div>
          </main>
        
      </div>
    )
  }
}

