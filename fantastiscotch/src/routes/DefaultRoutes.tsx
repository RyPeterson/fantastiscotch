import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Index from "../pages/Index";

const DefaultRoutes: FC = props => (
  <Switch>
    <Route path="/" exact>
      <Index />
    </Route>
  </Switch>
);

export default DefaultRoutes;
