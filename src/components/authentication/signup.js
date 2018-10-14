// React
import React from 'react';

// Components
// Styles

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signupUsername: '',
      signupPassword: ''
    };
  }

  handleInputChange(event) {
    console.log('handle is being called');

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
          console.log('signup submitted');

          console.log(this.state);

          const newUserObject = {
            username: this.state.signupUsername,
            password: this.state.signupPassword
          };

          console.log(newUserObject);

          return fetch('http://localhost:8080/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(newUserObject)
          })
            .then(response => response.json())
            .catch(err => console.error(err));
        }}
      >
        <label htmlFor="signupUsername">Username</label>
        <input type="text" name="signupUsername" />

        <label htmlFor="signupPassword">Password</label>
        <input type="password" name="signupPassword" />

        <button type="submit">Submit</button>
      </form>
    );
  }
}
