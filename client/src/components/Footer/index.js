import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="container-fluid footer">
        <footer class="page-footer font-small special-color-dark pt-4">
          <div class="container">
            <div class="row">
              <div class="col-md-6 mb-4">
                <ul>
                  <li className="footer-link">
                    
                    <NavLink
                      to="/"
                      className="footer-link"
                      activeClassName="active"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    
                    <NavLink
                      to="/insurance"
                      className="footer-link"
                      activeClassName="active"
                    >
                      Insurance
                    </NavLink>
                  </li>

                  <li>
                    
                    <NavLink
                      to="/claims"
                      className="footer-link"
                      activeClassName="active"
                    >
                      Claims
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-copyright text-center py-3">
            © 2020 Copyright: Watch Policy
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
