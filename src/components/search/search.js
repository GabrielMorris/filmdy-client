// React
import React from 'react';
import { reduxForm, Field } from 'redux-form';

// Actions
import {
  fetchSearchFilms,
  clearSearchResults
} from '../../actions/search-actions';

// Components
import LazyHero from 'react-lazy-hero';

// Styles
import './search.css';

export class SearchForm extends React.Component {
  componentDidMount() {
    this.props.dispatch(clearSearchResults());
  }

  onSubmit(values) {
    const token = localStorage.getItem('authToken');
    this.props.dispatch(fetchSearchFilms(values.searchInput, token));
  }

  render() {
    return (
      <section>
        <LazyHero
          color="#546e7a"
          className="diary-hero"
          minHeight="7vh"
          opacity={1}
          style={{
            color: '#ffffff'
          }}
        >
          <div className="hero-path">
            <h1 style={{ fontSize: '32px' }}>Search films</h1>
          </div>
        </LazyHero>

        <form
          className="search-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          role="search"
        >
          <label htmlFor="searchInput">Search: </label>
          <Field
            name="searchInput"
            type="text"
            placeholder="Find films!"
            component="input"
          />

          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default reduxForm({
  form: 'search'
})(SearchForm);
