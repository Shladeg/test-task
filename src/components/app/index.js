import React from "react";
import Header from "../header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Products from "../products/index";
import ProductDescription from "../products/product-description/index";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Header />
          <Switch>
            <Route
              exact
              path={["/products", "/products/:slug", "/"]}
              component={Products}
            />
            <Route
              path="/product-description/:productSlug"
              component={ProductDescription}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
