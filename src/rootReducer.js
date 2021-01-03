import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import dashboard from "./containers/Dashboard/reducer";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (history) {
  return combineReducers({
    router: connectRouter(history),
    dashboard,
  });
}
