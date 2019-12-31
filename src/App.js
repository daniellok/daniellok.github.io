/* @flow strict-local */

import Navbar from "./components/Navbar";
import React from "react";
import { Router } from "@reach/router";
import logo from "./logo.svg";
import Post from "./Post";
import TestPost1 from "./posts/TestPost1";
import TestPost2 from "./posts/TestPost2";

const Home = () => (
  <div>
    <Navbar path="/" />
    <header className="App-header">Home page under construction</header>
  </div>
);

const About = () => (
  <div>
    <Navbar path="/about/" />
    <header className="App-header">About page under construction too</header>
  </div>
);

const Posts = () => (
  <div>
    <Navbar path="/posts/" />
    <div className="container">
      <Post
        path=":postName"
        title="test_post_1.txt"
        content={TestPost1()}
        preview
      />
      <Post
        path=":postName"
        title="test_post_2.txt"
        content={TestPost2()}
        preview
      />
    </div>
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

/**
 * pageHierarchy structure:
 * {
 *   full path : {
 *     name: friendly name,
 *     parent: parent directory,
 *     links: array of full paths
 *   }
 * }
 */
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
export const pages = Object.keys(pageHierarchy);
