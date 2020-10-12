import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  // QUESTION, why is the router here and not in the app like i am used to? its maybe that by putting it here its less messy?
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
