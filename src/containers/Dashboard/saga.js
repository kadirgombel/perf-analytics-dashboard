import { takeLatest, put } from "redux-saga/effects";
import { FETCH_ANALYTICS } from "./constants";
import axios from "../../services/axios";
import { fetchAnalyticsSuccess, fetchAnalyticsFail } from "./actions";

function* fetchAnalytics({ timeSpace }) {
  try {
    const { data } = yield axios.get("/analytics", {
      params: {
        to: timeSpace?.to,
        from: timeSpace?.from,
      },
    });
    yield put(fetchAnalyticsSuccess(data));
  } catch (error) {
    yield put(fetchAnalyticsFail(error));
  }
}

export default function* authSaga() {
  yield takeLatest(FETCH_ANALYTICS, fetchAnalytics);
}
