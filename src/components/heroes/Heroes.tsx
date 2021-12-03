import React from "react"
import { MarvelApi } from "../MarvelApi"
import { SearchPanel } from '../search-panel'
import { HeroesItem } from "../HeroesItem"
import './heroes.scss'
import { Hero } from "../../types/hero"

// const marvelApi = new MarvelApi()

interface IState {
  heroes: Array<Hero>
}

export class Heroes extends React.Component<any, IState> {
  
  constructor (props: any) {
    super(props)
    this.state = {
      heroes: []
    }
  }

  componentDidMount() {
    MarvelApi.getCharacters().then(data => {
      this.setState({
        heroes: data
      })
    })
  }

  

  render() {
    return (
      <div className="container">
        <SearchPanel />
        <div className="main__content">
        {this.state.heroes?.map(hero => <HeroesItem key={hero.id} hero={hero}/>)}
        </div>
      </div>
    )
  }
}