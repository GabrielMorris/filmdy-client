// React
import React from 'react';

// Redux
import { reduxForm, Field, focus } from 'redux-form';
import {
  required,
  nonEmpty,
  usernameLength,
  passwordLength
} from './validators';

// Actions
import { login, signup } from '../../actions/auth';

// Components
import Input from './Input';

// Styles
import './auth.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    // Create state to hold any signup errors we encounter
    this.state = {
      signupError: ''
    };
  }

  // On submit handler
  onSubmit(event) {
    event.preventDefault();

    // When a user signs up attempt to sign them up
    this.props
      .dispatch(signup(this.state.signupUsername, this.state.signupPassword))
      .then(() =>
        // If signup doesn't throw an error we'll go ahead and sign the user in as well, which will redirect them
        this.props.dispatch(
          login(this.state.signupUsername, this.state.signupPassword)
        )
      )
      .catch(error => {
        // Catch any signup errors that get thrown so we can display them to the user
        this.setState({ signupError: error.errors._error });
      });
  }

  // Handle input change function
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // Update the state with the values of fields that get changed
    this.setState({
      [name]: value
    });
  }

  render() {
    /* Submit success/error view logic */
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
