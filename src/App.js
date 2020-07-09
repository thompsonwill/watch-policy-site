import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./pages/Landing/";
import NotFound from "./pages/404/";
import Insurance from "./pages/Insurance/";
import About from "./pages/About/";


import Header from "./components/Header"
import Footer from "./components/Footer"

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
// import './App.less';
import { enquireScreen } from "enquire-js";

let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <div className="container">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/insurance" component={Insurance} />
        <Route exact path="/about" component={About} />


        {/* <Route component={NotFound} /> */}
        </div>

      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
// 