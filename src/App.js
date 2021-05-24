import React from "react";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/producto/:id" exact component={ProductPage} />
      </Router>
    </React.Fragment>
  );
}

export default App;
