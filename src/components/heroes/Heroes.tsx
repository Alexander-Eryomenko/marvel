import React from "react"
import { MarvelApi } from "../MarvelApi"
import { SearchPanel } from '../SearchPanel'
import { HeroesItem } from "../HeroesItem"
import { Spinner } from '../Spinner'
import { Hero } from "../../types/hero"
import { withRouter } from "react-router-dom"
import queryString from 'query-string'

import './heroes.scss'

interface IState {
  heroes: Array<Hero>
  isLoading: boolean
  search: string
}

class Heroes extends React.Component<any, IState> {
  constructor (props: any) {
    super(props)
    this.state = {
      heroes: [],
      isLoading: false,
      search: ''
    }
  }

  getCharacter = () => {
    this.setState({
      isLoading: true
    })
    MarvelApi.getCharacters(this.state.search).then(data => {
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
    this.getSearchValue()
  }

  componentDidUpdate(prevProps:any) {
    if (this.props.location.search !== prevProps.location.search) {
      this.getCharacter()
    }
    
  }

  getSearchValue = () => {
    const search = queryString.parse(this.props.location.search)
    const { query } = search
    if(this.state.search !== query) {
      this.setState({
        search: query?.toString() || ''
      }, () => this.getCharacter())
      
    }
  }
  
  onInput = (event: any) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    this.props.history.push(`?query=${this.state.search}`)
  }

  render() {
    const { isLoading } = this.state
    return (
      <div className="container">
        <SearchPanel onSubmit={this.handleSearch} onChange={this.onInput} value={this.state.search} />
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