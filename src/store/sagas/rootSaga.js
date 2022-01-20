import { all } from "redux-saga/effects";
import { dataSaga } from "./dataSaga";

export default function* rootSaga() {
  return yield all([...dataSaga]);
}
