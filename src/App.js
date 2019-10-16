import React from "react";
import Header from "./Header/index.js";
import Home from "./Home/index.js";
import Carousel from "./Carousel/index";
import ProductPage from "./ProductPage/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/producto/:id" exact component={ProductPage} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
