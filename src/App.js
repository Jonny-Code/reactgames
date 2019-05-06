import React from "react";
import Concentration from "./components/Concentration";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <>
        <Route path="/" exact component={Home} />
        <Route path="/games/Concentration" component={Concentration} />
      </>
    </Router>
  );
};

export default App;
