import React from "react";
import { enquireScreen } from "enquire-js";
import "./style.css";
import QuoteBar from "../../components/QuoteBar";
let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

class Insurance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="insurance-head">
            <center>
              <h1>Product Details</h1>
            </center>
          </div>
        </div>

        <div>
          <center>
            <h4>
              Whether you're a veteran collector or just purchasing your first
              watch, Watch Policy is the easiest way to protect your watch or
              watch collection.
            </h4>
          </center>

          <div class="card insurance-options">
            <div class="card-body">Insured for full collectible value.</div>
          </div>

          <div class="card insurance-options">
            <div class="card-body">No appraisal rquried at application.</div>
          </div>

          <div class="card insurance-options">
            <div class="card-body">$0 deductibles available.</div>
          </div>

          <div class="card insurance-options">
            <div class="card-body">Competitive Premiums.</div>
          </div>

          <div class="card insurance-options">
            <div class="card-body">
              Placement with an A.M. best 'A' rated carrier.
            </div>
          </div>

          <div class="card insurance-options">
            <div class="card-body">
              Coverage for collections up to $1,000,000.
            </div>
          </div>
          <QuoteBar />
          <div>
            <center>
              <h4 className="insurance-second-title">
                Watch collection insurance vs standard homeowners policies
              </h4>
            </center>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"> </th>
                  <th scope="col">Watch Collection Insurance</th>
                  <th scope="col">Standard Homeowner's Policy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Requires Appraisals</td>
                  <td>No*</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Requires detailed inventory</td>
                  <td>No (inventory required over $50k)</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Claims</td>
                  <td>Pays full collectible value</td>
                  <td>Pays actual cash value (depreciated)</td>
                </tr>
                <tr>
                  <td>Deductible</td>
                  <td>$0 deductible avaialable</td>
                  <td>Usually $500+</td>
                </tr>
                <tr>
                  <td>Coverage Limits</td>
                  <td>Up to $1M</td>
                  <td>Usually $500 - $2,000</td>
                </tr>
                <tr>
                  <td>Imposes Sub-Limits</td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Insures against risk of accidental breakage</td>
                  <td>Yes</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
            <center>
                <p className="asterisk">
                  Appraisal and photos are required for watches valued over
                  $50,000 and in event of claim for all watches.
                </p>
              </center>
          </div>
        </div>
      </div>
    );
  }
}

export default Insurance;
