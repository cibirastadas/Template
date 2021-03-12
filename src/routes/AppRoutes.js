import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
const Home = lazy(() => import("../pages/Home/Home"));
const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default AppRoutes;
