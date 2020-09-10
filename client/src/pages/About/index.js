import React from "react";
import { enquireScreen } from "enquire-js";
// import "./style.css";
import QuoteBar from "../../components/QuoteBar";
let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

class About extends React.Component {
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
          <center>
            <h1>About Us</h1>
          </center>
        </div>
        <div className="about-content">
          <h4>
            <b>Watch Policy is an independent insurance agency</b>
          </h4>
          <p>
            Located in Chicago, IL and founded by watch nerds - we read the
            blogs, we watch the videos, we aspire for our own 'great' watches.
            So we understand the signifcance of every watch you purchase. That
            said, we're also insurance nerds, so weare passionate about helping
            you properly protect your investment.
          </p>
          <br />

          <h4>
            <b>We're all digital around here</b>
          </h4>
          <p>
            Even though we can all appreciate a well-crafted mechanical
            movement, technology is at the core of our existance. We strive to
            provide our clients with the best experience from purchase to
            service. Watch Policy accomplishes this with our in-house
            development team who keeps our technology 'fully wound' and is
            always working to imporve our processes based on client feedback and
            industry advancements.
          </p>
<br/>
          <h4>
            <b>We believe there is a watch for everyone</b>
          </h4>
          <p>
            You may be into vintage, modern, sport, dress, or all of the above.
            Maybe you just made your first major watch purchase or maybe you're
            a seasoned collector. We understand that watches are important, and
            we want to make sure they stay protected. For more information about
            insuring your watch for the full collectible value check out our
            product overview page.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
