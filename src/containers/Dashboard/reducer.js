import produce from "immer";
import { FETCH_ANALYTICS_FAIL, FETCH_ANALYTICS_SUCCESS } from "./constants";

const initialState = {
  analytics: [],
  isAnalyticsPending: false,
};

/* eslint-disable default-case, no-param-reassign, import/no-anonymous-default-export */
export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_ANALYTICS_SUCCESS:
        draft.analytics = action.payload;
        draft.isAnalyticsPending = false;
        break;
      case FETCH_ANALYTICS_FAIL:
        draft.isAnalyticsPending = false;
        break;
    }
  });
