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

const About = () => (
  <div className="App">
    <Navbar path="/about/" />
    <header className="App-header">About page under construction too</header>
  </div>
);

const Posts = () => (
  <div className="App">
    <Navbar path="/posts/" />
    <header className="App-header">Posts page under construction too</header>
  </div>
);

function App() {
  return (
    <Router>
      <Home path="/" />
      <About path="about/" />
      <Posts path="posts/" />
    </Router>
  );
}

export default App;

export const pages = ["/", "/about/", "/posts/"];
export const pageHierarchy = {
  "/": {
    name: "home",
    parent: null,
    links: ["/about/", "/posts/"]
  },
  "/about/": {
    name: "about/",
    parent: "/",
    links: []
  },
  "/posts/": {
    name: "posts/",
    parent: "/",
    links: []
  }
};
