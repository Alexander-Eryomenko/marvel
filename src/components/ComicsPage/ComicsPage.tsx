import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { requestComicsInfo } from "../../redux/actions/actionsComicsPage";
import { Comic, IThumbnail } from "../../types/hero";
import { Spinner } from "../Spinner";

import "./comics-page.scss";
import { RootState } from "../../redux/store";
import { Dispatch } from "redux";

interface IParamsRouter {
  id: string;
}

interface IState {
  comics: Array<Comic>;
  isLoading: boolean;
}

interface IProps extends RouteComponentProps<IParamsRouter> {
  comics: Array<Comic>;
  error: string;
  isLoading: boolean;
  requestComicsInfo: (id: string) => void;
}

interface IComicPageItemProps {
  description: string;
  thumbnail: IThumbnail;
}

class ComicsPage extends React.Component<IProps, IState> {

  componentDidMount() {
    console.log(this.props);
    const { requestComicsInfo } = this.props;
    const { id } = this.props.match.params;
    requestComicsInfo(id);
  }

  render() {
    const { isLoading, comics } = this.props;
    return (
      <>
        <div className="container">
          <div className="comics-page">
            <h2 className="comics-page__title">Comics</h2>
            <div className="comics-page__content">
              {isLoading ? (
                <Spinner />
              ) : (
                <>
                  {comics.map((comic) => (
                    <ComicsPageItem
                      key={comic.id}
                      thumbnail={comic.thumbnail}
                      description={comic.description}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const ComicsPageItem = (props: IComicPageItemProps) => {
  const { description, thumbnail } = props;
  const srcImgComics = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <>
      <div className="comics-page__item">
        <div className="comics-page__item-img">
          <img src={`${srcImgComics}`} alt="img" />
        </div>
        <div className="comics-page__item-descr">{description ? description : 'No description'}</div>
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    comics: state.comics.comics,
    isLoading: state.comics.isLoading,
    error: state.comics.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    requestComicsInfo: (id: string) => dispatch(requestComicsInfo(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ComicsPage));
