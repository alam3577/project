import { all, call, delay, fork, put, takeEvery } from "redux-saga/effects";
import { dataLoadingError, dataLoadingSuccess } from "../actions/dataActions";
import { loadDataApi } from "../api";
import { LOADING_DATA } from "../types/dataTypes";

export function* onLoadDataStartAsync() {
  try {
    const response = yield call(loadDataApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(dataLoadingSuccess(response.data));
    }
  } catch (error) {
    yield put(dataLoadingError(error.response.data));
  }
}

export function* onLoadData() {
  yield takeEvery(LOADING_DATA, onLoadDataStartAsync);
}

export const dataSaga = [fork(onLoadData)];
