import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import MainForm from "./questionForm/MainForm";
import history from "../history";
import Home from "./Home";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <h1 className="ui block center aligned header">Question GAME</h1>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/MainForm" exact component={MainForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
