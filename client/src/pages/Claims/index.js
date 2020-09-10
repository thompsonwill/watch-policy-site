import React from "react";
import { enquireScreen } from "enquire-js";
import "./style.css";
import QuoteBar from "../../components/QuoteBar";
import TextInput from "../../components/TextInput";
import NumberInput from "../../components/NumberInput";
import DateInput from "../../components/DateInput";
import EmailInput from "../../components/EmailInput";
import TextArea from "../../components/TextArea";


let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

class Claims extends React.Component {
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
              <h1>Claims</h1>
            </center>
          </div>
        </div>

        <div>
          <center>
            <h4>
              In the event you need to file a claim, please complete the form
              below, email claims@watchpolicy.com or call 888-888-8888
            </h4>
          </center>
          <br />

          <center>
            <h5>What you will need</h5>
          </center>

          <div class="card insurance-options">
            <div class="card-body">Description or reason for claim.</div>
          </div>

          <div class="card insurance-options">
            <div class="card-body">Photos of your watch or watches.</div>
          </div>

          <div class="card insurance-options">
            <div class="card-body">Original purchase receipt or appraisal</div>
          </div>

          <div className="jumbotron claim-header">
            <div className="claim-head">
              <center>
                <h1>Claim Form</h1>
              </center>
            </div>
          </div>

          <div>
            <form>
              <div class="form-group">
                <TextInput
                  id="firstName"
                  label="First Name"
                  placeholder="Will"
                />

                <TextInput
                  id="lastName"
                  label="Last Name"
                  placeholder="Watch"
                />

                <NumberInput
                  id="policy-number"
                  label="Policy Number"
                  placeholder="123456"
                />

                <DateInput id="date-of-incident" label="Date of Incident" />

                <EmailInput
                  id="exampleFormControlInput1"
                  label="Email address"
                  placeholder="name@example.com"
                />
                <TextArea
                  id="claimDesc"
                  label="Claim Description"
                  rows={3}
                />
              </div>

          
              <div class="form-group">
                <label for="watch-photos">Watch Photos</label>
                <input
                  type="file"
                  class="form-control-file"
                  id="watch-photos"
                />
              </div>

              <div class="form-group">
                <label for="watch-recei[ts">Appraisal/Receipt</label>
                <input
                  type="file"
                  class="form-control-file"
                  id="watch-recei[ts"
                />
              </div>
              <button type="submit" class="btn btn-danger mb-2">
                Submit Claim
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Claims;
