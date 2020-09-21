import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./pages/Main";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Details from "./pages/Details";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Main} />
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/details" component={Details} />
    </BrowserRouter>
  );
}

export default Routes;
