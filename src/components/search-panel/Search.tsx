import React from 'react'
import './search.scss'

export class SearchPanel extends React.Component {

  render() {
    return (
      <section className="search-panel">
        <div className="container">

        <div className="search-panel__wrapper">

          <div className="search-panel__input">
            <input placeholder="Search" type="text" />
          </div>

          <div className="search-panel__wrapper-btn">

            <div className="search-panel__btn-sort">
              <button>sort by</button>
            </div>

          <div className="search-panel__btn-search">
            <button>Search btn</button>
          </div>
          
          </div>
        </div>
        </div>
      </section>
      
    )
  }
}