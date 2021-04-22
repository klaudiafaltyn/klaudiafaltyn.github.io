import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./Navigation";
import MainPage from "../pages/MainPage";
import Projects from "../pages/Projects";

const App = () => {
  return (
    <Router>
      <Navigation>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Navigation>
    </Router>
  );
};

export default App;
