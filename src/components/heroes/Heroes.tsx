import React from "react"
import { MarvelApi } from "../MarvelApi"
import { SearchPanel } from '../search-panel'
import { HeroesItem } from "../HeroesItem"
import { Spinner } from '../Spinner'
import { Hero } from "../../types/hero"
import { withRouter } from "react-router-dom"
import queryString from 'query-string'

import './heroes.scss'


interface IState {
  heroes: Array<Hero>
  isLoading: boolean
}

class Heroes extends React.Component<any, IState> {
  
  constructor (props: any) {
    super(props)
    this.state = {
      heroes: [],
      isLoading: false,
    }
  }

  getCharacter = () => {
    this.setState({
      isLoading: true
    })
    MarvelApi.getCharacters(this.getSearchValue()).then(data => {
      this.setState({
        heroes: data
      })
    }).finally(() => {
      this.setState({
        isLoading: false
      })
    })
  }

  componentDidMount() {
    this.getCharacter()
  }

  getSearchValue = () => {
    const search = queryString.parse(this.props.location.search)
    const { query } = search
    return query?.toString() || ''
  }

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.history.push(`?query=${event.target.value}`)
    
  }
 onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
      this.getCharacter()
    }
  render() {
    const { isLoading } = this.state
    return (
      <div className="container">
        <SearchPanel onSubmit={this.onSubmit} onChange={this.handleSearch} value={this.getSearchValue()} />
        <div className="main__content">
        { isLoading ? <Spinner/> : <>
          {this.state.heroes.map(hero => <HeroesItem key={hero.id} hero={hero}/>)}
          </> }
        </div>
      </div>
    )
  }
}

export default withRouter(Heroes)