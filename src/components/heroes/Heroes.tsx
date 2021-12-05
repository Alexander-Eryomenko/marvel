import React from "react"
import { MarvelApi } from "../MarvelApi"
import { SearchPanel } from '../search-panel'
import { HeroesItem } from "../HeroesItem"
import { Spinner } from '../Spinner'
import './heroes.scss'
import { Hero } from "../../types/hero"

// const marvelApi = new MarvelApi()

interface IState {
  heroes: Array<Hero>
  isLoading: boolean
}

export class Heroes extends React.Component<any, IState> {
  
  constructor (props: any) {
    super(props)
    this.state = {
      heroes: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    MarvelApi.getCharacters().then(data => {
      this.setState({
        heroes: data
      })
    }).finally(() => {
      this.setState({
        isLoading: false
      })
    })
  }

  

  render() {
    const { isLoading } = this.state
    return (
      <div className="container">
        <SearchPanel />
        <div className="main__content">
        { isLoading ? <Spinner/> : <>
          {this.state.heroes?.map(hero => <HeroesItem key={hero.id} hero={hero}/>)}
          </> }
        </div>
      </div>
    )
  }
}