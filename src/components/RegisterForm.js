import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class RegisterForm extends Component {
    handleSubmit(){
        console.info("Handle the submit");
    }
  render() {
    const {fields: {team_name, number_members}, handleSubmit} = this.props;
    let members_info = [];
    console.log(this);
    for(let x = 0; x < this.props.values.number_members; x++){
        console.log("found one");
        members_info.push(<h4>Member</h4>);
    }
    return (

      <form onSubmit={handleSubmit}>
        <div>
          <label><h4>Team Name</h4></label>
          <input type="text" className="landing-input" {...team_name} />
        </div>

        <div>
          <label><h4>Number of Members</h4></label>
          <input type="number" className="landing-input" {...number_members} />
        </div>

        {members_info}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

RegisterForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'register',                           // a unique name for this form
  fields: ['team_name', 'number_members'] // all the fields in your form
})(RegisterForm);

export default RegisterForm;