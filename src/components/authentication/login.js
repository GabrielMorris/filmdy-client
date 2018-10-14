// React
import React from 'react';

// Components
// Styles

export default function Login(props) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        console.log('login submitted');
      }}
    >
      <label>Username</label>
      <input type="text" />

      <label>Password</label>
      <input type="password" />

      <button type="submit">Submit</button>
    </form>
  );
}
