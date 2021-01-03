import {
  FETCH_ANALYTICS,
  FETCH_ANALYTICS_FAIL,
  FETCH_ANALYTICS_SUCCESS,
} from "./constants";

export const fetchAnalytics = (timeSpace) => ({
  type: FETCH_ANALYTICS,
  timeSpace,
});
export const fetchAnalyticsSuccess = (payload) => ({
  type: FETCH_ANALYTICS_SUCCESS,
  payload,
});
export const fetchAnalyticsFail = (error) => ({
  type: FETCH_ANALYTICS_FAIL,
  error,
});
