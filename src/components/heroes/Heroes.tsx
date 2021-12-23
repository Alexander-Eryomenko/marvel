import React from "react";
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
  requestHeroesInfo: (search: string) => void;
}

interface IState {
  search: string;
}

class Heroes extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      search: "",
    };
  }

  getCharacter = () => {
    const { requestHeroesInfo } = this.props;
    requestHeroesInfo(this.state.search);
  };

  componentDidMount() {
    this.getSearchValue();
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.getCharacter();
    }
  }

  getSearchValue = () => {
    const search = queryString.parse(this.props.location.search);
    const { query } = search;
    if (this.state.search !== query) {
      this.setState(
        {
          search: query?.toString() || "",
        },
        () => this.getCharacter()
      );
    }
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.history.push(`?query=${this.state.search}`);
  };

  render() {
    const { isLoading, heroes } = this.props;
    return (
      <div className="container">
        <SearchPanel
          onSubmit={this.handleSearch}
          onChange={this.onChange}
          value={this.state.search}
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
    requestHeroesInfo: (search: string) => dispatch(requestHeroesInfo(search)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Heroes));
