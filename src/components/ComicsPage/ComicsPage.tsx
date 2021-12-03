import React from "react";
import './comics-page.scss'
import { withRouter } from 'react-router-dom'
import { Comic, IThumbnail } from "../../types/hero";
import { MarvelApi } from "../MarvelApi";

interface IState {
  comics: Array<Comic>
}

interface IComicPageItemProps {
  description: string
  thumbnail: IThumbnail
}




const ComicsPageItem = (props: IComicPageItemProps) => {
  const { description, thumbnail } = props

  return (
    <>
      <div className="comics-page__item">
        <div className="comics-page__item-img">
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="img" />
        </div>
        <div className="comics-page__item-descr">
          {description}
        </div>
      </div>
    </>
  )
}


class ComicsPage extends React.Component<any, IState> {
  
  constructor(props: any) {
    super(props)
    this.state = {
      comics: []
    }
  }

  componentDidMount() {
    const {id} = this.props.match.params
    MarvelApi.getComicsByCharacterId(id).then(data => {
      this.setState({
        comics: data
      })
    })
  }

  render() {
    const title = () => {
      return this.state.comics.map(item => {
        return item.title
      })
    }
    
    return (
      <>
      <div className="container">
      <div className="comics-page">
        <h2 className="comics-page__title">
          {title}
        </h2>
        <div className="comics-page__content">
        {this.state.comics?.map((comic) => <ComicsPageItem key={comic.id} thumbnail={comic.thumbnail} description={comic.description}/>)}
        </div>
      </div>
      </div>
    </>
    )
  }
}

export default withRouter(ComicsPage) 