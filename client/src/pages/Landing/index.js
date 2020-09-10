import React from "react";
import Header from "../../components/Header";
import QuoteBar from "../../components/QuoteBar"
import { enquireScreen } from "enquire-js";
import Banner from "../../components/Banner";
import "./style.css";
let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

class LandingPage extends React.Component {
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
        <div className="home-wrapper">
          <Banner />
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div class="card" >
                  <img
                    class="card-img-top"
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-text">Full Collectible Value</h5>
                  </div>
                </div>
              </div>
              <div class="col-sm">
                <div class="card" >
                  <img
                    class="card-img-top"
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-text">$0 Deductible Available</h5>
                  </div>
                </div>
              </div>
              <div class="col-sm">
                <div class="card" >
                  <img
                    class="card-img-top"
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">No Appraisal at Application</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <center>
                <p className="asterisk">
                  Appraisal and photos are required for watches valued over
                  $50,000 and in event of claim for all watches.
                </p>
              </center>
            </div>

            {/* end container */}
          </div>
       
        </div>

    <QuoteBar/>
      </div>
      
    );
  }
}

export default LandingPage;
