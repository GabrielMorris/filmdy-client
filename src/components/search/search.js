// React
import React from 'react';
import { reduxForm, Field } from 'redux-form';

// Actions
import { fetchSearchFilms } from '../../actions/search-actions';

// Components
// Styles
import './search.css';

export class SearchForm extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchSearchFilms());
  }

  onSubmit(values) {
    const token = localStorage.getItem('authToken');
    console.log(values);
    this.props.dispatch(fetchSearchFilms(values.searchInput, token));
  }

  render() {
    return (
      <section>
        <form
          className="search-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
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
