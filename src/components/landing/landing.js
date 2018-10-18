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
        opacity="0"
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

      <Grid width={320} gap={32} className="landing-card-grid">
        {/* Card */}
        <div className="landing-card">
          {/* Header */}
          <div className="landing-card-header">
            <h2>Card title</h2>
          </div>

          {/* Row */}
          <div className="row">
            {/* Image column */}
            <div className="image-column">
              <img
                src="https://via.placeholder.com/300x445"
                className="card-poster"
              />
            </div>

            {/* Body column */}
            <div className="column">
              <p>
                Blood black nothingness began to spin, a system of cells
                interlinked within cells interlinked within cells interlinked,
                and dreadfully distinct against the dark a tall white fountain
                played
              </p>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="landing-card">
          {/* Header */}
          <div className="landing-card-header">
            <h2>Card title</h2>
          </div>

          {/* Row */}
          <div className="row">
            {/* Image column */}
            <div className="image-column">
              <img
                src="https://via.placeholder.com/300x445"
                className="card-poster"
              />
            </div>

            {/* Body column */}
            <div className="column">
              <p>
                Blood black nothingness began to spin, a system of cells
                interlinked within cells interlinked within cells interlinked,
                and dreadfully distinct against the dark a tall white fountain
                played
              </p>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="landing-card">
          {/* Header */}
          <div className="landing-card-header">
            <h2>Card title</h2>
          </div>

          {/* Row */}
          <div className="row">
            {/* Image column */}
            <div className="image-column">
              <img
                src="https://via.placeholder.com/300x445"
                className="card-poster"
              />
            </div>

            {/* Body column */}
            <div className="column">
              <p>
                Blood black nothingness began to spin, a system of cells
                interlinked within cells interlinked within cells interlinked,
                and dreadfully distinct against the dark a tall white fountain
                played
              </p>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="landing-card">
          {/* Header */}
          <div className="landing-card-header">
            <h2>Card title</h2>
          </div>

          {/* Row */}
          <div className="row">
            {/* Image column */}
            <div className="image-column">
              <img
                src="https://via.placeholder.com/300x445"
                className="card-poster"
              />
            </div>

            {/* Body column */}
            <div className="column">
              <p>
                Blood black nothingness began to spin, a system of cells
                interlinked within cells interlinked within cells interlinked,
                and dreadfully distinct against the dark a tall white fountain
                played
              </p>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}
