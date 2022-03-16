import { all } from "redux-saga/effects";
import { watchFetchComicsById } from "./sagaComicsPage";
import { watchFetchHeroes } from "./sagaHeroesPage";

function* rootSaga() {
  yield all([watchFetchComicsById(), watchFetchHeroes()]);
}

export default rootSaga;
