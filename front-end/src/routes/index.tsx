import React from "react";
import { Switch, Route } from "react-router-dom";

import Developers from "../pages/Developers";
import DevelopersList from "../pages/List";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Developers} />
    <Route path="/list" exact component={DevelopersList} />
  </Switch>
);

export default Routes;
