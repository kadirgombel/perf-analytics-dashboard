import React from "react";
import { render } from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import App from "./containers/App";
import perfAnalytics from "perf-analytics";

const perfAnalyzer = perfAnalytics({
  url: process.env.REACT_APP_API_URL + "/analytics",
});
perfAnalyzer.run();

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
