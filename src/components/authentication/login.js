// React
import React from 'react';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';

import { login } from '../../actions/auth';
import Input from './Input';
import { required, nonEmpty } from './validators';

// Components
// Styles
import './auth.css';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginError: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  onSubmit(values) {
    const { username, password } = values;

    this.props
      .dispatch(login(username, password))
      .then(() => {
        setTimeout(() => {}, 1000);
      })
      .catch(error => {
        this.setState({ loginError: error.errors._error });
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
        onSubmit={event => {
          event.preventDefault();

          const userObject = {
            username: this.state.loginUsername,
            password: this.state.loginPassword
          };
          this.onSubmit(userObject);
        }}
      >
        <div>
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
        </div>
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
