import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import "./style.css"

class Header extends React.Component {
  state = {
    current: "Home",
    initial: true,
  };

  handleClick = (e) => {
 
  };

  componentDidMount() {
    console.log(this.state.current);
  }

  render() {
    // const menu = (

    // );

    return (
      <div id="header" className="header">
        <div></div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img id="logo-pic" src="./logo.png"/>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li onClick={this.handleClick} class="nav-item">

                  <NavLink to="/" className="nav-link" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li onClick={this.handleClick} class="nav-item">
                  <NavLink
                    to="/insurance"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Insurance
                  </NavLink>
                </li>
                <li onClick={this.handleClick} class="nav-item">
                <NavLink
                    to="/about"
                    className="nav-link"
                    activeClassName="active"
                  >
                    About Us
                  </NavLink>
                </li>
                <li onClick={this.handleClick} class="nav-item">
                <NavLink
                    to="/claims"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Claims
                  </NavLink>
                </li>
                <li onClick={this.handleClick} class="nav-item">
                <NavLink
                    to="/login"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
