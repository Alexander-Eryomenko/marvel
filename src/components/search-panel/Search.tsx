import React from 'react'
import { Input, Button } from '@mui/material';
import './search.scss'



interface IProps {
  value: string
  // onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onSubmit: (event: any) => void
  onChange: (event: any) => void
}

export class SearchPanel extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props)
  }



  render() {
    return (
      <section className="search-panel">
        <div className="container">
        <form onSubmit={this.props.onSubmit} >
        <div className="search-panel__wrapper">

          <div className="search-panel__input">
            <Input color="primary" size="small" onChange={this.props.onChange} value={this.props.value} placeholder="Search" type="text" />
          </div>

          <div className="search-panel__wrapper-btn">

            <div className="search-panel__btn-sort">
              <Button variant="contained" size="small">sort by</Button>
            </div>

          <div className="search-panel__btn-search">
            <Button size="small" type="submit" variant="contained">
            Search btn
            </Button>
          </div>

          </div>
        </div>
        </form>
        </div>
      </section>
      
    )
  }
}