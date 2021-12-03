import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Header } from '../header'
import { Home } from '../Home'
import { PageError } from "../PageError"
import { ComicsPage } from '../ComicsPage'
import './app.scss'

// MarvelApi.getCharacters()
// MarvelApi.getCharactersById(1010699)
// MarvelApi.getComicsByCharacterId(1010699)





export class App extends React.Component {
  render() {
    return (
        <>
        <Header/>

              <Router>
                <Switch>
                  <Route exact path="/comics/:id" component={ComicsPage} />
                  <Route exact path="/" component={Home} />
                  <Route path="*" component={PageError} />
                </Switch>
              </Router>

        </>
    )
  }
}

