// @flow strict-local
import React from "react";
import { Router } from "@reach/router";
import logo from "./logo.svg";
import "./App.css";

const Home = () => (
  <div className="App">
    <header className="App-header">Home page under construction</header>
  </div>
);

const OtherPath = () => (
  <div className="App">
    <header className="App-header">Other page under construction too</header>
  </div>
);

function App() {
  return (
    <Router>
      <Home path="/" />
      <OtherPath path="/other" />
    </Router>
  );
}

export default App;
