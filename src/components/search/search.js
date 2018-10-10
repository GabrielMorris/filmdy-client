// React
import React from 'react';
import { reduxForm, Field } from 'redux-form';

// Components
// Styles

export class SearchForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <section>
        <form
          className="search-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <label htmlFor="searchInput">Search: </label>
          <Field name="searchInput" type="text" component="input" />

          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default reduxForm({
  form: 'search'
})(SearchForm);
