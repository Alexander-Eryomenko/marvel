import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Header } from '../header'
import { Home } from '../Home'
import { PageError } from "../PageError"
import { ComicsPage } from '../ComicsPage'
import { Box } from '@mui/material'
import './app.scss'





export class App extends React.Component {
  render() {
    return (
        <>
        
          <Router>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/comics/:id" component={ComicsPage} />
              <Route path="*" component={PageError} />
            </Switch>
          </Router>
</>
        
    )
  }
}

