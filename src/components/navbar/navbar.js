// React
import React from 'react';

// Components
// Styles
import './navbar.css';

export default function Navbar(props) {
  return (
    <nav>
      {/* Header */}
      <a href="/">
        <h1>Filmdy</h1>
      </a>

      {/* Search button */}
      <a id="search" href="/search">
        Search
      </a>
    </nav>
  );
}
