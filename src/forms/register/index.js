import React, {Component} from 'react';
// import {reduxForm} from 'redux-form';

class RegisterForm extends Component {
  handleSubmit(){
      console.info("Handle the submit");
  }
  handleTeamName(e){
    this.setState({
      team_name: e.target.value
    });
  }
  handleContactEmail(e){
    this.setState({
      contact_email: e.target.value
    });
  }
  handleContactPhoneNumber(e){
    this.setState({
      contact_phone_number: e.target.value
    });
  }
  handleMember1FirstName(e){
    this.setState({
      member1_first_name: e.target.value
    });
  }
  handleMember1LastName(e){
    this.setState({
      member1_last_name: e.target.value
    });
  }
  handleMember1Email(e){
    this.setState({
      member1_email: e.target.value
    });
  }
  handleMember1TshirtSize(e){
    this.setState({
      member1_tshirt_size: e.target.value
    });
  }
  handleMember1PhoneNumber(e){
    this.setState({
      member1_phone_number: e.target.value
    });
  }
  handleMember2FirstName(e){
    this.setState({
      member2_first_name: e.target.value
    });
  }
  handleMember2LastName(e){
    this.setState({
      member2_last_name: e.target.value
    });
  }
  handleMember2Email(e){
    this.setState({
      member2_email: e.target.value
    });
  }
  handleMember2TshirtSize(e){
    this.setState({
      member2_tshirt_size: e.target.value
    });
  }
  handleMember2PhoneNumber(e){
    this.setState({
      member2_phone_number: e.target.value
    });
  }
  handleMember3FirstName(e){
    this.setState({
      member3_first_name: e.target.value
    });
  }
  handleMember3LastName(e){
    this.setState({
      member3_last_name: e.target.value
    });
  }
  handleMember3Email(e){
    this.setState({
      member3_email: e.target.value
    });
  }
  handleMember3TshirtSize(e){
    this.setState({
      member3_tshirt_size: e.target.value
    });
  }
  handleMember3PhoneNumber(e){
    this.setState({
      member3_phone_number: e.target.value
    });
  }
  handleMember4FirstName(e){
    this.setState({
      member4_first_name: e.target.value
    });
  }
  handleMember4LastName(e){
    this.setState({
      member4_last_name: e.target.value
    });
  }
  handleMember4Email(e){
    this.setState({
      member4_email: e.target.value
    });
  }
  handleMember4TshirtSize(e){
    this.setState({
      member4_tshirt_size: e.target.value
    });
  }
  handleMember4PhoneNumber(e){
    this.setState({
      member4_phone_number: e.target.value
    });
  }
  handleMember5FirstName(e){
    this.setState({
      member5_first_name: e.target.value
    });
  }
  handleMember5LastName(e){
    this.setState({
      member5_last_name: e.target.value
    });
  }
  handleMember5Email(e){
    this.setState({
      member5_email: e.target.value
    });
  }
  handleMember5TshirtSize(e){
    this.setState({
      member5_tshirt_size: e.target.value
    });
  }
  handleMember5PhoneNumber(e){
    this.setState({
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
    return (

      <form onSubmit={this.handleSubmit} className="register-form">
        <div className="row columns">
          <label className="columns small-12 medium-4"><h4>Team Name</h4></label>
          <input type="text" className="landing-input columns small-12 medium-8"  />
        </div>


        <div>
          <h2 className="styled-header">Members</h2>
          <div className="small-12 large-8 large-offset-2">
            <h3>Member 1</h3>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 1 First Name</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8" onChange={this.handleMember1FirstName} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 1 Last Name</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember1LastName} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 1 Email</h4></label>
              <div className="small-8 columns">
                <input type="email" className=" columns landing-input columns small-8"onChange={this.handleMember1Email} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 1 Phone Number</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember1PhoneNumber} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 1 Tshirt Size</h4></label>
              <select name="tshirt_size" className="landing-input columns small-8"onChange={this.handleMember1TshirtSize}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

          </div>
          <div className="small-12 large-6 large-offset-3">
            <h3>Member 2</h3>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 2 First Name</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8" onChange={this.handleMember2FirstName} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 2 Last Name</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember2LastName} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 2 Email</h4></label>
              <div className="small-8 columns">
                <input type="email" className=" columns landing-input columns small-8"onChange={this.handleMember2Email} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 2 Phone Number</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember2PhoneNumber} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 2 Tshirt Size</h4></label>
              <select name="tshirt_size" className="landing-input columns small-8"onChange={this.handleMember2TshirtSize}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

          </div>
          <div className="small-12 large-6 large-offset-3">
            <h3>Member 3</h3>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 3 First Name</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8" onChange={this.handleMember3FirstName} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 3 Last Name</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember3LastName} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 3 Email</h4></label>
              <div className="small-8 columns">
                <input type="email" className=" columns landing-input columns small-8"onChange={this.handleMember3Email} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 3 Phone Number</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember3PhoneNumber} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 3 Tshirt Size</h4></label>
              <select name="tshirt_size" className="landing-input columns small-8"onChange={this.handleMember3TshirtSize}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

          </div>
          <div className="small-12 large-6 large-offset-3">
            <h3>Member 4</h3>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 4 First Name</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8" onChange={this.handleMember4FirstName} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 4 Last Name</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember4LastName} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 4 Email</h4></label>
              <div className="small-8 columns">
                <input type="email" className=" columns landing-input columns small-8"onChange={this.handleMember4Email} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 4 Phone Number</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember4PhoneNumber} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 4 Tshirt Size</h4></label>
              <select name="tshirt_size" className="landing-input columns small-8"onChange={this.handleMember4TshirtSize}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

          </div>
          <div className="small-12 large-6 large-offset-3">
            <h3>Member 5</h3>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 5 First Name</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8" onChange={this.handleMember5FirstName} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 5 Last Name</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember5LastName} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 5 Email</h4></label>
              <div className="small-8 columns">
                <input type="email" className=" columns landing-input columns small-8"onChange={this.handleMember5Email} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 5 Phone Number</h4></label>
              <div className="small-8 columns">
                <input type="text" className="columns landing-input columns small-8"onChange={this.handleMember5PhoneNumber} />
              </div>
            </div>
            <div className="columns small-12">
              <label className="columns small-4"><h4>Member 5 Tshirt Size</h4></label>
              <select name="tshirt_size" className="landing-input columns small-8"onChange={this.handleMember5TshirtSize}>
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

        <button type="submit" className="landing-button">Submit</button>
      </form>
    );
  }
}


export default RegisterForm;