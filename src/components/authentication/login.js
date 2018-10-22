// React
import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';

// Redux validators
import { required, nonEmpty } from './validators';

// Actions
import { login } from '../../actions/auth';

// Components
import Input from './Input';

// Styles
import './auth.css';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    // Create state within this component that will manage whether or not we have a login error
    this.state = {
      loginError: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // On submit handler
  onSubmit(values) {
    const { username, password } = values;

    // Dispatch the username and password and attempt to log the user in
    this.props
      .dispatch(login(username, password))
      .then(() => {
        setTimeout(() => {}, 1000);
      })
      .catch(error => {
        // Set an error if login fails
        this.setState({ loginError: error.errors._error });
      });
  }

  // Handle input change
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // Set the state of the field that's being updated to match the value that's been updated
    this.setState({
      [name]: value
    });
  }

  render() {
    /* Submit success/error logic */
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
        onSubmit={event => {
          event.preventDefault();

          const userObject = {
            username: this.state.loginUsername,
            password: this.state.loginPassword
          };
          this.onSubmit(userObject);
        }}
      >
        <fieldset>
          <legend>Login form</legend>
          <h1>Login</h1>
          {successMessage}
          <span style={{ color: 'darkred' }}>
            {errorMessage}
            {this.state.loginError}
          </span>

          <Field
            name="loginUsername"
            type="text"
            placeholder="Username"
            label="Username"
            component={Input}
            validate={[required, nonEmpty]}
          />

          <Field
            name="loginPassword"
            type="password"
            placeholder="Password"
            label="Password"
            component={Input}
            validate={[required, nonEmpty]}
          />

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => {
    dispatch(focus('login', Object.keys(errors)[0]));
  }
})(Login);
