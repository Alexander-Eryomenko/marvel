import { put, call, takeLatest } from "redux-saga/effects";
import {
  requestHeroesSuccess,
  requestHeroesFail,
} from "../actions/actionsHeroesPage";
import { actionsHeroes } from "../actions/actionsHeroesPage";
import { MarvelApi } from "../../components/MarvelApi";
import { Hero } from "../../types/hero";

export function* watchFetchHeroes() {
  yield takeLatest(actionsHeroes.REQUEST_HEROES, fetchHeroes);
}

export function* fetchHeroes(action?: ReturnType<any>): Generator<any> {
  try {
    const data = yield call(MarvelApi.getCharacters, action.payload);
    yield put(requestHeroesSuccess(data));
  } catch (error) {
    yield put(requestHeroesFail());
  }
}
