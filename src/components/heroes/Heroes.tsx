import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { requestHeroesInfo } from "../../redux/actions/actionsHeroesPage";
import { SearchPanel } from "../SearchPanel";
import { HeroesItem } from "../HeroesItem";
import { Spinner } from "../Spinner";
import { Hero } from "../../types/hero";
import { RootState } from "../../redux/store";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";

import "./heroes.scss";

interface IProps {
  heroes: Array<Hero>;
  isLoading: boolean;
  requestHeroesInfo: (search?: string) => void;
}

interface ILocationRouter {
  search: string;
}

const Heroes = (props: IProps) => {
  const { isLoading, heroes, requestHeroesInfo } = props;
  const [searchInput, setSearch] = useState('')
  const { search } = useLocation<ILocationRouter>()
  const history = useHistory()
  const locationSearchQuery = queryString.parse(search)
  const { query } = locationSearchQuery

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
    history.push(`?query=${searchInput}`);
    requestHeroesInfo(searchInput)
  };
    
    return (
      <div className="container">
        <SearchPanel
          onSubmit={handleSearch}
          onChange={onChange}
          value={searchInput}
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

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
