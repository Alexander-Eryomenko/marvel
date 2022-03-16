import {put, call, takeLatest} from 'redux-saga/effects'
import { requestComicsInfoSuccess, requestComicsInfoFail } from '../actions/actionsComicsPage'
import { actionsComics } from '../actions/actionsComicsPage'
import { MarvelApi } from "../../components/MarvelApi"

export function* watchFetchComicsById() {
  yield takeLatest(actionsComics.REQUEST_COMICS_INFO, fetchComicsById)
}

export function* fetchComicsById(action: ReturnType<any>): Generator<any> {
  try {
    const data = yield call(MarvelApi.getComicsByCharacterId, action.payload)
    yield put(requestComicsInfoSuccess(data))
  } catch (error) {
    yield put(requestComicsInfoFail())
  }
}