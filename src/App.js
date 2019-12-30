/* @flow strict-local */

import Navbar from "./components/Navbar";
import React from "react";
import { Router } from "@reach/router";
import logo from "./logo.svg";
import "./App.css";

const Home = () => (
  <div className="App">
    <Navbar path="/" />
    <header className="App-header">Home page under construction</header>
  </div>
);

const OtherPath = () => (
  <div className="App">
    <Navbar path="/other/" />
    <header className="App-header">Other page under construction too</header>
  </div>
);

function App() {
  return (
    <Router>
      <Home path="/" />
      <OtherPath path="/other/" />
    </Router>
  );
}

export default App;
export const routes = ["/", "/other/"];
export const routeHierarchy = {
  "/": {
    name: "home",
    parent: null,
    children: ["/other/"]
  },
  "/other/": {
    name: "other",
    parent: "/",
    children: []
  }
};
