import React from "react";
import { Switch, Route } from "react-router-dom";
import Developers from "../pages/Developers";

import DevelopersForm from "../pages/Developers/form";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Developers} />
    <Route path="/developers/new" exact component={DevelopersForm} />
    <Route path="/developers/:id/edit" exact component={DevelopersForm} />
  </Switch>
);

export default Routes;
