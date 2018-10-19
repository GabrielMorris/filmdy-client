// React
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import LazyHero from 'react-lazy-hero';
import Grid from 'react-css-grid';

// Styles
import './landing.css';

export default function Landing(props) {
  return (
    <div className="landing">
      <LazyHero
        imageSrc="https://i.imgur.com/unKRyIA.jpg"
        minHeight="40vh"
        className="landing-hero"
        opacity={0}
        style={{
          color: '#ffffff'
        }}
      >
        <h1 className="landing-h1">Powerful film journaling</h1>
        <h3>
          The best site for finding, tracking, and managing the films you've
          seen and loved.
        </h3>

        <Link to="/login">
          <button className="hero-button">Login</button>
        </Link>

        <Link to="/signup">
          <button className="hero-button">Signup</button>
        </Link>
      </LazyHero>

      <Grid width={284} gap={16} className="landing-card-grid">
        {/* Card */}
        <div className="landing-card">
          {/* Header */}
          <div className="landing-card-header">
            <h1>
              <span role="img" aria-label="Magnifying glass emoji">
                🔍
              </span>{' '}
              Search
            </h1>
            <hr />
          </div>

          <div>
            <p className="landing-card-text">
              Search millions of movies and find your next cinema experience.
              Whether it's a summer blockbuster or an indie gem we have what
              you're looking for.
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="landing-card">
          {/* Header */}
          <div className="landing-card-header">
            <h1>
              <span role="img" aria-label="Popcorn emoji">
                🍿
              </span>{' '}
              Watch
            </h1>
            <hr />
          </div>

          <div>
            <p className="landing-card-text">
              Once you've found your next film sit back with a bag of popcorn,
              turn down the lights, and enjoy the show!
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="landing-card">
          {/* Header */}
          <div className="landing-card-header">
            <h1>
              <span role="img" aria-label="Thumbs up emoji">
                👍
              </span>{' '}
              Rate
            </h1>
            <hr />
          </div>

          <div>
            <p className="landing-card-text">
              After you've finished the film come back and add it to your Filmdy
              Diary, we'll keep track of it and all the other movies you've
              watched. Don't forget to give it a rating!
            </p>
          </div>
        </div>
      </Grid>
    </div>
  );
}
