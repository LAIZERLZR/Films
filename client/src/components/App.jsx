import React from "react";
import { Switch, Route } from "react-router-dom";
import Films from "./films";
import Header from "./header/head";
import Main from "./main";
import Footer from "./footer/footer";
import Genres from "./genres/index";
import FilmInfo from './film/index';
import TopFilm from './TOP';
import News from './FilmNews';
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import FilmComment from './comments';

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
        <Route path ="/film/:id">
          <FilmInfo/>
        </Route>
        <Route path='/topFilms'>
          <TopFilm/>
        </Route>
        <Route path='/news'>
          <News/>
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/signin">
          <SigninPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
