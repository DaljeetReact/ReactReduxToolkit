/*
Watchers are what Redux-Saga uses to catch any actions being dispatched to the store. 

*/

import { takeLatest } from "redux-saga/effects";
import { handleGetUSer } from "./Handlers/userHandler";

export function* watcherSaga() {
   yield takeLatest('saga/GetUser',handleGetUSer);
}
  