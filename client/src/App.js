import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Homes from "./pages/Homes";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
      <MenuBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/homes" component={Homes} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
