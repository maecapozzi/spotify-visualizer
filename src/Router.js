import React from "react";
import App from "./App";
import { Search } from "./Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
};
