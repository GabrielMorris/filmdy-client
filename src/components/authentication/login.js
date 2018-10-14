// React
import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { login } from '../../actions/auth';
// import { required, nonEmpty } from '../validators';

// Components
// Styles

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  onSubmit(values) {
    const { username, password } = values;

    return this.props.dispatch(login(username, password));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(this.state);
  }

  render() {
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
        <label htmlFor="loginUsername">Username</label>
        <input type="text" name="loginUsername" />

        <label htmlFor="loginPassword">Password</label>
        <input type="password" name="loginPassword" />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login'
})(Login);
