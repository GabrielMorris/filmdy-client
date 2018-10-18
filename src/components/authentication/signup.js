// React
import React from 'react';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';

import { login, signup } from '../../actions/auth';
import Input from './Input';
import {
  required,
  nonEmpty,
  usernameLength,
  passwordLength
} from './validators';

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
        onChange={event => this.handleInputChange(event)}
        onSubmit={event => this.onSubmit(event)}
      >
        <h2>Signup</h2>
        {successMessage}
        <span style={{ color: 'darkred' }}>
          {errorMessage}
          {this.state.signupError}
        </span>

        <Field
          name="signupUsername"
          type="text"
          component={Input}
          label="Username"
          validate={[required, nonEmpty, usernameLength]}
        />

        <Field
          name="signupPassword"
          type="password"
          component={Input}
          label="Password"
          validate={[required, nonEmpty, passwordLength]}
        />

        <button type="submit">Submit</button>
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
