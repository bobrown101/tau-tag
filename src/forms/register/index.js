import React, {Component} from 'react';
// import {reduxForm} from 'redux-form';
import PaymentForm from '../payment';

// var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;

class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.state = {};
    RegisterForm.context = this;
  }
  handleSubmit(id){
      console.info("Handle the submit", id);
  }
  handleTeamName(e){
    RegisterForm.context.setState({
      team_name: e.target.value
    });
  }
  handleContactEmail(e){
    RegisterForm.context.setState({
      contact_email: e.target.value
    });
  }
  handleContactPhoneNumber(e){
    RegisterForm.context.setState({
      contact_phone_number: e.target.value
    });
  }
  handleMember1FirstName(e){
    RegisterForm.context.setState({
      member1_first_name: e.target.value
    });
  }
  handleMember1LastName(e){
    RegisterForm.context.setState({
      member1_last_name: e.target.value
    });
  }
  handleMember1Email(e){
    RegisterForm.context.setState({
      member1_email: e.target.value
    });
  }
  handleMember1TshirtSize(e){
    RegisterForm.context.setState({
      member1_tshirt_size: e.target.value
    });
  }
  handleMember1PhoneNumber(e){
    RegisterForm.context.setState({
      member1_phone_number: e.target.value
    });
  }
  handleMember2FirstName(e){
    RegisterForm.context.setState({
      member2_first_name: e.target.value
    });
  }
  handleMember2LastName(e){
    RegisterForm.context.setState({
      member2_last_name: e.target.value
    });
  }
  handleMember2Email(e){
    RegisterForm.context.setState({
      member2_email: e.target.value
    });
  }
  handleMember2TshirtSize(e){
    RegisterForm.context.setState({
      member2_tshirt_size: e.target.value
    });
  }
  handleMember2PhoneNumber(e){
    RegisterForm.context.setState({
      member2_phone_number: e.target.value
    });
  }
  handleMember3FirstName(e){
    RegisterForm.context.setState({
      member3_first_name: e.target.value
    });
  }
  handleMember3LastName(e){
    RegisterForm.context.setState({
      member3_last_name: e.target.value
    });
  }
  handleMember3Email(e){
    RegisterForm.context.setState({
      member3_email: e.target.value
    });
  }
  handleMember3TshirtSize(e){
    RegisterForm.context.setState({
      member3_tshirt_size: e.target.value
    });
  }
  handleMember3PhoneNumber(e){
    RegisterForm.context.setState({
      member3_phone_number: e.target.value
    });
  }
  handleMember4FirstName(e){
    RegisterForm.context.setState({
      member4_first_name: e.target.value
    });
  }
  handleMember4LastName(e){
    RegisterForm.context.setState({
      member4_last_name: e.target.value
    });
  }
  handleMember4Email(e){
    RegisterForm.context.setState({
      member4_email: e.target.value
    });
  }
  handleMember4TshirtSize(e){
    RegisterForm.context.setState({
      member4_tshirt_size: e.target.value
    });
  }
  handleMember4PhoneNumber(e){
    RegisterForm.context.setState({
      member4_phone_number: e.target.value
    });
  }
  handleMember5FirstName(e){
    RegisterForm.context.setState({
      member5_first_name: e.target.value
    });
  }
  handleMember5LastName(e){
    RegisterForm.context.setState({
      member5_last_name: e.target.value
    });
  }
  handleMember5Email(e){
    RegisterForm.context.setState({
      member5_email: e.target.value
    });
  }
  handleMember5TshirtSize(e){
    RegisterForm.context.setState({
      member5_tshirt_size: e.target.value
    });
  }
  handleMember5PhoneNumber(e){
    RegisterForm.context.setState({
      member5_phone_number: e.target.value
    });
  }

  render() {
    // const {fields: {team_name, number_members, members}, handleSubmit} = this.props;
    // let members_info = [];
    // console.log(this);
    // for(let x = 0; x < this.props.values.number_members; x++){
    //     console.log("found one");
    //     members_info.push(<div>
    //       <label><h4>Name</h4></label>
    //       <input type="text" className="landing-input" {...}
    //     </div>
    //     );
    // }
    // <form onSubmit={this.handleSubmit} className="register-form">
    // <button className="landing-button" onClick={this.makePayment}>Pay Now</button>


    return (

      <form className="register-form">
        <br/>
        <div className="small-12 large-8 large-offset-2 row">
            <div className="columns small-12">
              <div className="columns small-12">
                  <label className="text-left"><h4>Team Name</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8" onChange={this.handleTeamName} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                  <label className="text-left"><h4>Contact Email</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8" onChange={this.handleContactEmail} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                  <label className="text-left"><h4>Contact Phone Number</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8" onChange={this.handleContactPhoneNumber} />
              </div>
            </div>
        </div>


        <div>
          <h2 className="styled-header">Members</h2>
          <h6 className="styled-header medium-6 medium-offset-3">* We won't validate your members info because we understand it's difficult to collect all that, however, do understand that it may lead to someone not getting a t-shirt or not getting notified of a game</h6>
          <div className="small-12 large-8 large-offset-2">
            <h3 className="styled-header">Member 1</h3>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>First Name</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8" onChange={this.handleMember1FirstName} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Last Name</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember1LastName} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Email</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="email" className=" columns landing-input columns small-8"onChange={this.handleMember1Email} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Phone Number</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember1PhoneNumber} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Tshirt Size</h4></label>
              </div>
              <div className="column small-12">
                <select name="tshirt_size" className="landing-input"onChange={this.handleMember1TshirtSize}>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            </div>

          </div>
          <div className="small-12 large-8 large-offset-2">
            <h3 className="styled-header">Member 2</h3>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>First Name</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8" onChange={this.handleMember2FirstName} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Last Name</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember2LastName} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Email Name</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="email" className=" columns landing-input columns small-8"onChange={this.handleMember2Email} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Phone Number Name</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember2PhoneNumber} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Tshirt Size</h4></label>
              </div>
              <div className="column small-12">
                <select name="tshirt_size" className="landing-input"onChange={this.handleMember2TshirtSize}>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>

            </div>

          </div>
          <div className="small-12 large-8 large-offset-2">
            <h3 className="styled-header">Member 3</h3>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>First Name</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8" onChange={this.handleMember3FirstName} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Last Name</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember3LastName} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Email</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="email" className=" columns landing-input columns small-8"onChange={this.handleMember3Email} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Phone Number</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember3PhoneNumber} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Tshirt Size</h4></label>
              </div>
              <div className="column small-12">
                <select name="tshirt_size" className="landing-input"onChange={this.handleMember3TshirtSize}>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            </div>

          </div>
          <div className="small-12 large-8 large-offset-2">
            <h3 className="styled-header">Member 4</h3>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>First Name</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8" onChange={this.handleMember4FirstName} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Last Name</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember4LastName} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Email</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="email" className=" columns landing-input columns small-8"onChange={this.handleMember4Email} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Phone Number</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember4PhoneNumber} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Tshirt Size</h4></label>
              </div>
              <div className="column small-12">
                <select name="tshirt_size" className="landing-input"onChange={this.handleMember4TshirtSize}>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            </div>

          </div>
          <div className="small-12 large-8 large-offset-2">
            <h3 className="styled-header">Member 5</h3>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>First Name</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8" onChange={this.handleMember5FirstName} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Last Name</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember5LastName} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Email</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="email" className=" columns landing-input columns small-8"onChange={this.handleMember5Email} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Phone Number</h4></label>
              </div>
              <div className="small-12 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember5PhoneNumber} />
              </div>
            </div>
            <div className="columns small-12">
              <div className="columns small-12">
                <label className="text-left"><h4>Tshirt Size</h4></label>
              </div>
              <div className="column small-12">
                <select name="tshirt_size" className="landing-input"onChange={this.handleMember5TshirtSize}>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            </div>

          </div>
        </div>
        <div className="columns small-12">
          <PaymentForm paymentVerified={this.handleSubmit}/>

        </div>
      </form>
    );
  }
}


export default RegisterForm;
