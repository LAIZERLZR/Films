import React from "react";
import { Switch, Route } from "react-router-dom";
import Films from "./films";
import Header from "./header/head";
import Main from "./main";

function App(props) {
  return (
    <Switch>
      <Route>
        <Header />
        <Main />
      </Route>
    </Switch>
  );
}

export default App;
