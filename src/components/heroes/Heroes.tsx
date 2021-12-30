import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { requestHeroesInfo } from "../../redux/actions/actionsHeroesPage";
import { SearchPanel } from "../SearchPanel";
import { HeroesItem } from "../HeroesItem";
import { Spinner } from "../Spinner";
import { Hero } from "../../types/hero";
import { RootState } from "../../redux/store";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
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
  const [searchInput, setSearchInput] = useState("");
  const { search } = useLocation();
  const navigate = useNavigate();
  // const history = useHistory();
  const locationSearchQuery = queryString.parse(search);
  const { query } = locationSearchQuery;

  useEffect(() => {
    if (typeof query === "string") {
      setSearchInput(query);
      requestHeroesInfo(query);
    } else {
      requestHeroesInfo();
      setSearchInput("");
    }
  }, [query]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`?query=${searchInput}`);
    requestHeroesInfo(searchInput);
  };

  return (
    <div className="container">
      <SearchPanel
        onSubmit={onSubmit}
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
};

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
