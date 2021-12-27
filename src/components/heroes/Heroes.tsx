import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { requestHeroesInfo } from "../../redux/actions/actionsHeroesPage";
import { SearchPanel } from "../SearchPanel";
import { HeroesItem } from "../HeroesItem";
import { Spinner } from "../Spinner";
import { Hero } from "../../types/hero";
import { RootState } from "../../redux/store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import queryString from "query-string";

import "./heroes.scss";

interface IProps extends RouteComponentProps {
  heroes: Array<Hero>;
  isLoading: boolean;
  requestHeroesInfo: (search?: string) => void;
}

const Heroes = (props: IProps) => {
  const { isLoading, heroes, requestHeroesInfo } = props;
  const [search, setSearch] = useState('')

  const locationSearch = queryString.parse(props.location.search)
  const { query } = locationSearch

  useEffect(() => {
    if(typeof query === 'string') {
      setSearch(query)
      requestHeroesInfo(query)
    } else {
      requestHeroesInfo()
      setSearch('')
    }
    
  }, [query])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.history.push(`?query=${search}`);
    requestHeroesInfo(search)
  };
    
    return (
      <div className="container">
        <SearchPanel
          onSubmit={handleSearch}
          onChange={onChange}
          value={search}
        />
        <div className="main__content">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {heroes.map((hero) => (
                <HeroesItem key={hero.id} hero={hero} />
              ))}
            </>
          )}
        </div>
      </div>
    );
  
}

const mapStateToProps = (state: RootState) => {
  return {
    heroes: state.heroes.heroes,
    isLoading: state.heroes.isLoading,
    error: state.heroes.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    requestHeroesInfo: (search?: string) => dispatch(requestHeroesInfo(search)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Heroes));
