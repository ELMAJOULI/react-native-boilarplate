import { all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "./actions";

export function* defaultActionWorker() {}

export default function* homeSaga() {
  yield all([takeLatest(actionTypes.DEFAULT_ACTION, defaultActionWorker)]);
}
