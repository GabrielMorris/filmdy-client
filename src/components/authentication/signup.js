// React
import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';

import { login, signup } from '../../actions/auth';
import Input from './Input';
import {
  required,
  nonEmpty,
  usernameLength,
  passwordLength
} from './validators';

// Styles
import './auth.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signupError: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('signup submitted');

    this.props
      .dispatch(signup(this.state.signupUsername, this.state.signupPassword))
      .then(() =>
        this.props.dispatch(
          login(this.state.signupUsername, this.state.signupPassword)
        )
      )
      .catch(error => {
        this.setState({ signupError: error.errors._error });
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    let successMessage;

    if (this.props.submitSucceeded) {
      successMessage = <div>Logging you in!</div>;
    }

    let errorMessage;

    if (this.props.error) {
      errorMessage = <div>{this.props.error}</div>;
    }

    return (
      <form
        className="auth-form"
        onChange={event => this.handleInputChange(event)}
        onSubmit={event => this.onSubmit(event)}
      >
        <fieldset>
          <legend>Signup form</legend>
          <h1>Signup</h1>
          {successMessage}
          <span style={{ color: 'darkred' }}>
            {errorMessage}
            {this.state.signupError}
          </span>

          <Field
            name="signupUsername"
            type="text"
            placeholder="Username"
            label="Username"
            component={Input}
            validate={[required, nonEmpty, usernameLength]}
          />

          <Field
            name="signupPassword"
            type="password"
            placeholder="Password"
            label="Password"
            component={Input}
            validate={[required, nonEmpty, passwordLength]}
          />

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signup',
  onSubmitFail: (errors, dispatch) => {
    dispatch(focus('signup', Object.keys(errors)[0]));
  }
})(Signup);
