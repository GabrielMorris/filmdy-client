// React
import React from 'react';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';

import { login } from '../../actions/auth';
import Input from './Input';
import { required, nonEmpty } from './validators';

// Components
// Styles

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
        <h2>Login</h2>
        {successMessage}
        <span style={{ color: 'darkred' }}>
          {errorMessage}
          {this.state.loginError}
        </span>

        <Field
          name="loginUsername"
          type="text"
          component={Input}
          label="Username"
          validate={[required, nonEmpty]}
        />

        <Field
          name="loginPassword"
          type="password"
          component={Input}
          label="Password"
          validate={[required, nonEmpty]}
        />

        <button type="submit">Submit</button>
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
