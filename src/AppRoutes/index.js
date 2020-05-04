import React from "react";
import { Route, Router, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "../App";

const AppRoutes = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Route path="/" exact component={App} />
      <Redirect to="/" />
    </Router>
  );
};

export default AppRoutes;
