import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import { Contacts } from "./pages/contacts/Contacts";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import { Register } from "./pages/register/Register";

export const CheckStartPage = (user) => {
  if (user) {
    return (
      <Switch>
        <Route path="/contacts" component={Contacts}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Redirect to="/contacts" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Redirect to="/login" />
    </Switch>
  );
};
