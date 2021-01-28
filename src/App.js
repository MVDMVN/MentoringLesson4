import React from "react";
import { Route } from "react-router-dom";

import Home from "./pages/HomePage";
import FullPost from "./pages/FullPostPage";
import About from "./pages/AboutPage";
import Navigation from "./components/Navigation";

import { Row } from "react-bootstrap";

import "./App.scss";

const apiUrl = "https://5c3755177820ff0014d92711.mockapi.io";

function App() {
  return (
    <div className="container">
      <Row className="d-block m-0">
        <Navigation />
      </Row>
      <Row className="d-block m-0 mt-4 mb-4">
        <Route
          exact
          path="/"
          component={(props) => <Home {...props} apiUrl={apiUrl} />}
        />
        <Route
          path="/post/:id"
          component={(props) => <FullPost {...props} apiUrl={apiUrl} />}
        />
        <Route
          path="/about"
          component={(props) => <About {...props} apiUrl={apiUrl} />}
        />
      </Row>
    </div>
  );
}

export default App;
