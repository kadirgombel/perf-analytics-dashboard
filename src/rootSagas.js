import { spawn } from "redux-saga/effects";

import dashboardSaga from "./containers/Dashboard/saga";

export default function* rootSaga() {
  yield spawn(dashboardSaga);
}
