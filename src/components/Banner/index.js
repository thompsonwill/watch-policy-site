import React from "react";

import "./style.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Banner(props) {
  return (
    <div className="jumbotron">
      <div class="row align-items-center my-5">
        <div class="col-sm">
          <h1 className="header-text">Insurance for people that love watches</h1>
          <form className="quote-form">
            <div className="form-group">
              <label for="zipcodeinput">Zip Code</label>
              <input
                type="email"
                class="form-control"
                id="zipcodeinput"
                aria-describedby="zipCode"
                placeholder="60611"
              />
            </div>
            <div className="form-group">
              <label for="collectioninput">Total Collection Value</label>
              <div className="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupPrepend3">
                    $
                  </span>
                </div>

                <input
                  type="number"
                  class="form-control"
                  id="collectioninput"
                  aria-describedby="value"
                  placeholder="2500"
                />
              </div>
            </div>
            <button type="submit" class="btn btn-secondary">
              Get Quote
            </button>
          </form>
        </div>
        <div class="col-sm quote-box">
          <h1 class="font-weight-light">$75/year</h1>
          
          <a href="#" className="btn-block btn btn-secondary">
            Other dedutible options
          </a>
          <ul>
            <li className="ded-item">$75/year with $250 deductible</li>
            <li className="ded-item">$75/year with $250 deductible</li>
            <li className="ded-item">$75/year with $250 deductible</li>
          </ul>
          <hr />
          <a class="btn btn-danger" href="#">
            Continue
          </a>
        </div>
      </div>
    </div>
  );
}

//

export default Banner;
