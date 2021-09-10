import React from "react";
import { Switch, Route } from "react-router-dom";
import Films from "./films";
import Header from "./header/head";
import Main from "./main";
import Footer from "./footer/footer";
import Genres from "./genres/index";

function App(props) {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/films">
          <Films />
        </Route>
        <Route path="/genres">
          <Genres />
        </Route>
        <Route path="/genre/:id">
          <Films />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
