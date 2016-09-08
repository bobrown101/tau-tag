var React = require('react');
var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;

var PaymentForm = React.createClass({
  mixins: [ ReactScriptLoaderMixin ],

  getInitialState: function() {
    return {
      stripeLoading: true,
      stripeLoadingError: false,
      submitDisabled: false,
      paymentError: null,
      paymentComplete: false,
      token: null
    };
  },
  getScriptURL: function() {
    return 'https://js.stripe.com/v2/';
  },

  onScriptLoaded: function() {
    if (!PaymentForm.getStripeToken) {
      // Put your publishable key here
      Stripe.setPublishableKey('pk_test_uunb3OWOVNVZHtWo2ZAAdWpw');

      this.setState({ stripeLoading: false, stripeLoadingError: false });
    }
  },

  onScriptError: function() {
    this.setState({ stripeLoading: false, stripeLoadingError: true });
  },

  onSubmit: function(event) {
    var self = this;
    event.preventDefault();
    this.setState({ submitDisabled: true, paymentError: null });
    // send form here
    Stripe.createToken(event.target, function(status, response) {
      if (response.error) {
        self.setState({ paymentError: response.error.message, submitDisabled: false });
      }
      else {
        self.setState({ paymentComplete: true, submitDisabled: false, token: response.id });
        console.log("Payment has been verified");
        console.log(self.props);
        self.props.paymentVerified(response.id);
      }
    });
  },

  render: function() {
    if (this.state.stripeLoading) {
      return <h3 className="styled-header">Loading</h3>;
    }
    else if (this.state.stripeLoadingError) {
      return <h3 className="styled-header">Error</h3>;
    }
    else if (this.state.paymentComplete) {
      return (<div className="success-box">
        <h3 className="styled-header">{"Payment Complete!"}</h3>
        <h3 className="styled-header">{"Your team is registered. You will hear from us closer to the event"}</h3>
        <img src={require("../../images/check-mark.svg")} />
      </div>
    );

    }
    else {
      return (<form onSubmit={this.onSubmit} >
        <br />
        <br />
        <br />
        <br />


        <h3 className="styled-header">{'Register Team Now - $90 ($15 per person)'}</h3>
        <label><h4 className="error">{ this.state.paymentError }</h4></label><br />

        <label><h4>{"Credit Card Number"}</h4></label>
        <input type='text' data-stripe='number' placeholder='XXXX-XXXX-XXXX-XXXX' className="columns landing-input columns small-8" /><br />

        <label><h4>{"Expiration Month"}</h4></label>
        <input type='text' data-stripe='exp-month' placeholder='XX' className="columns landing-input columns small-8" /><br />

        <label><h4>{"Expiration Year"}</h4></label>
        <input type='text' data-stripe='exp-year' placeholder='XX' className="columns landing-input columns small-8" /><br />

        <label><h4>{"CVC (3-digit code on the back)"}</h4></label>
        <input type='text' data-stripe='cvc' placeholder='XXX' className="columns landing-input columns small-8" /><br />

        <input disabled={this.state.submitDisabled} type='submit' value='Purchase' className="landing-button"/>
      </form>);
    }
    // return <div></div>;
  }
});

module.exports = PaymentForm;
