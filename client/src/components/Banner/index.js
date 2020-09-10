import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./style.css";
import zipcodes from "zipcodes";
import NumberInput from "../NumberInput";
// import TextInput from "../TextInput";

import getRate from "../../helpers/GetRate/";

function Banner(props) {
  const [collectionValue, setCollectionValue] = useState();
  const [zipCode, setzipCode] = useState();

  const [rate, setRate] = useState(75);

  const [new100, setNew100] = useState(75);

  const [new250, setNew250] = useState(75);

  const handleChange = (e, target) => {
    target(e.target.value);
    console.log(collectionValue);
  };

  const submitForm = () => {
    console.log(zipcodes.lookup(zipCode));
    console.log(getRate(collectionValue));
    let rates = getRate(collectionValue);
    setRate(rates.rate);
    setNew100(rates[100]);
    setNew250(rates[250])
  };

  console.log(getRate(35000));
  // console.log(zipcodes.lookup(60611));
  return (
    <div className="jumbotron">
      <div class="row align-items-center my-5">
        <div class="col-sm">
          <h1 className="header-text">
            Insurance for people that love watches
          </h1>
          <form className="quote-form">
            <div className="form-group">
              <NumberInput
                id="zip"
                label="Zipcode"
                placeholder="60611"
                onChange={(e) => handleChange(e, setzipCode)}
              />
            </div>
            <div className="form-group">
              <div className="input-group">
                <div class="input-group-prepend"></div>

                <NumberInput
                  id="collectionValue"
                  label="Collection Value"
                  placeholder="25,000"
                  onChange={(e) => handleChange(e, setCollectionValue)}
                />
              </div>
            </div>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={submitForm}
            >
              Get Quote
            </button>
          </form>
        </div>
        <div class="col-sm quote-box">
          <h1 class="font-weight-light">${rate}/year</h1>

          {/* <a href="#" className="btn-block btn btn-secondary">
            Other dedutible options
          </a> */}
          <hr/>
          <ul>
            <li className="ded-item">${new100}/year with $100 deductible</li>
            <li className="ded-item">${new250}/year with $250 deductible</li>
          </ul>
          <hr />
          <a class="btn btn-danger" style={{ color: "#ffffff!important" }}>
            <Link
              to={{
                pathname: "/application",
                state: { collectionValue: collectionValue },
              }}
            >
              Continue
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
}

//

export default Banner;
