import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import StarshipList from "../StarshipList/StarshipList";
// import StarshipPage from "../StarshipPage/StarshipPage";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Route exact path="/" render={() => <StarshipList />} />
      </>
    );
  }
}

export default App;
