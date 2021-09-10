import React from "react";
import { Switch, Route } from "react-router-dom";
import Films from "./films";
import Header from "./header/head";
import Main from "./main";
import Footer from './footer/footer';
import Genres from './genres/index';

function App(props) {
  return (
    <Switch>
      <Route path = "/" exact>
        <Header />
        <Main />
        <Footer/>
      </Route>
      <Route path = "/films">
        <Header/>
        <Films/>
        <Footer/>
      </Route>
      <Route path = "/genres">
        <Header/>
        <Genres/>
        <Footer/>
      </Route>
    </Switch>
  );
}

export default App;
