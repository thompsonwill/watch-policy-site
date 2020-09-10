import React from "react";
import { enquireScreen } from "enquire-js";
import "./style.css";
import QuoteBar from "../../components/QuoteBar";
import TextInput from "../../components/TextInput";
import NumberInput from "../../components/NumberInput";
import DateInput from "../../components/DateInput";
import EmailInput from "../../components/EmailInput";
import TextArea from "../../components/TextArea";
import TrueFalse from "../../components/TrueFalse";
import StripeForm from "../../components/Stripe";

let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      fullname: "",
      firstName: "",
      lastName: "",
      address: "",
      streetAddress: "",
      streetAddress2: "",
      hydrant: "",
      bankruptcy: "",
      cancelled: "",
      fireAlarm: "",
      insured: "",
      currentlyInsured: "",
      crime: "",
      city: "",
      zip: "",
      phone: "",
      deadbolt: "",
      email: "",
      yearBuilt: "",
      constructionType: "",
      locationType: "",
      floodZone: "",
      basement: "",
      basementCont: "",
      offFloor: "",
      collectionValue: this.props.location.state.collectionValue || 0,
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
    console.log(this.props);
  }

  handleChange = (e) => {
    console.log(e.target.id);
    this.setState({ [e.target.id]: e.target.value });
  };

  makeContract = function () {
    const iframe = document.createElement("iframe");
    iframe.src = `https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=9286ccbc-1d92-462c-90d7-353941ac2ea4&env=na4&acct=162de648-6869-4a39-86a5-7858b5f278ab&v=2&phone=${this.state.phone}&fullname=${this.state.firstName}&email=${this.state.email}&streetAddress=${this.state.streetAddress}&city=${this.state.city}&state=IL&zip=${this.state.zip}&deadbolt-${this.state.deadbolt}=true&collectionValue=${this.state.collectionValue}`;
    iframe.style.width = "100%";
    iframe.style.height = "100vh";
    iframe.style.border = "0";
    document.getElementById("docusign").append(iframe);

    document.getElementById("application").style.display = "none";
    console.log(iframe.src);
  };

  render() {
    const { collectionValue } = this.props.location.state || 0;

    // console.log(this.props)

    return (
      <div>
        <div className="jumbotron">
          <div className="insurance-head">
            <center>
              <h1>Application</h1>
            </center>
          </div>
        </div>

        <div>
          <StripeForm />
          <div id="application">
            <center>
              <h4>
                Let's start with some basics, {collectionValue || "friend"}
              </h4>
            </center>
            <br />
            <form>
              <div class="form-group">
                <TextInput
                  id="firstName"
                  label="First Name"
                  placeholder="Will"
                  onChange={(e) => this.handleChange(e)}
                />

                <TextInput
                  id="lastName"
                  label="Last Name"
                  placeholder="Watch"
                  onChange={(e) => this.handleChange(e)}
                />
                <br />

                {/* <EmailInput
                  id="email"
                  label="Email address"
                  placeholder="name@example.com"
                  onChange={(e) => this.handleChange(e)}
                /> */}
                <br />

                <NumberInput
                  id="phone"
                  label="Phone Number"
                  placeholder="555-555-5555"
                  onChange={(e) => this.handleChange(e)}
                />

                <br />

                <TextInput
                  id="streetAddress"
                  label="Street Address"
                  placeholder="123 N Main Street"
                  onChange={(e) => this.handleChange(e)}
                />

                <TextInput
                  id="streetAddress2"
                  label="Address #2"
                  onChange={(e) => this.handleChange(e)}
                  placeholder="#123"
                />

                <TextInput
                  id="city"
                  label="City"
                  placeholder="Chicago"
                  onChange={(e) => this.handleChange(e)}
                />
                <NumberInput
                  id="zip"
                  label="Zip Code"
                  placeholder="00000"
                  onChange={(e) => this.handleChange(e)}
                />

                <p>Is your collection stored in more than one location?</p>

                <TextArea
                  id="location-desc"
                  label="If yes, describe:"
                  rows={2}
                  onChange={(e) => this.handleChange(e)}
                />

                <p>Is any one item in your collection valued oer $25,000?</p>
                <TextInput
                  id="collection-desc"
                  label="If yes, list the item(s) here:"
                  onChange={(e) => this.handleChange(e)}
                />

                <br />
                <TextInput
                  id="collectionValue"
                  label="Total Collection Value"
                  placeholder={this.state.collectionValue}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>

              <center>
                <h4>On to some information about your location</h4>
              </center>
              <br />

              <TextInput
                id="constructionType"
                label="Construction Type"
                onChange={(e) => this.handleChange(e)}
              />

              <NumberInput
                id="yearBuilt"
                label="Year Built"
                onChange={(e) => this.handleChange(e)}
              />
              <TextInput
                id="locationType"
                label="Location Type"
                onChange={(e) => this.handleChange(e)}
              />

              <TrueFalse
                id="hydrant"
                label="1000 feet from hydrant?"
                onChange={(e) => this.handleChange(e)}
              />
              <TrueFalse
                id="deadbolt"
                label="Deadbolt?"
                onChange={(e) => this.handleChange(e)}
              />
              <TrueFalse
                id="fireAlarm"
                label="Central station monitored fire alarm?"
                onChange={(e) => this.handleChange(e)}
              />
              <TrueFalse
                id="burglar-alarm"
                label="Monitored burglar alarm?"
                onChange={(e) => this.handleChange(e)}
              />
              <TrueFalse
                id="basement"
                label="Is your collection stored in a basement or below ground floor?"
                onChange={(e) => this.handleChange(e)}
              />
              <TrueFalse
                id="basementCont"
                label="If yes, are watches stored at least 12 inches off the ground?"
                onChange={(e) => this.handleChange(e)}
              />
              <TrueFalse
                id="floodZone"
                label="Flood zone?"
                onChange={(e) => this.handleChange(e)}
              />
              <br />
              <center>
                <h4>Last few questions...</h4>
              </center>
              <br />
              <TrueFalse
                id="currentlyInsured"
                label="Is your collection currently insured?"
                onChange={(e) => this.handleChange(e)}
              />
              <TextInput
                id="insured"
                label="If yes, enter insurance company"
                onChange={(e) => this.handleChange(e)}
              />

              <TrueFalse
                id="cancelled"
                label="Has your watch insurance been cancelled in the past five years?"
                onChange={(e) => this.handleChange(e)}
              />
              <TrueFalse
                id="crime"
                label="Have you ever been convicted of a crime?"
                onChange={(e) => this.handleChange(e)}
              />
              <TrueFalse
                id="bankruptcy"
                label="Have you filed for bankruptcy in the past five years?"
                onChange={(e) => this.handleChange(e)}
              />
              <button
                type="button"
                class="btn btn-danger mb-2"
                onClick={() => console.log(this.makeContract())}
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
        <div id="docusign"></div>
      </div>
    );
  }
}

export default Application;
