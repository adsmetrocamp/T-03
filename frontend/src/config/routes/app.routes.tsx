import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";

interface Props {}

export const AppRoutes = (props: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};
