// React
import React from 'react';
import { reduxForm, Field } from 'redux-form';

// Actions
import { fetchDiaryFilms } from '../../../actions/diary-actions';

// Components
// Styles

export class DiarySearchForm extends React.Component {
  onChange(values) {
    console.log(values);
    const searchTerm = values.searchInput;
    console.log(searchTerm);

    this.props.dispatch(
      fetchDiaryFilms(this.props.token, this.props.userID, searchTerm)
    );
  }

  render() {
    return (
      <section>
        <form
          className="search-form"
          onSubmit={event => {
            event.preventDefault();
            console.log('hello');
          }}
          onChange={this.props.handleSubmit(values => this.onChange(values))}
        >
          <label htmlFor="searchInput">Filter: </label>
          <Field
            name="searchInput"
            type="text"
            placeholder="Filter your films"
            component="input"
          />

          <button
            style={{
              display: 'inline-block'
            }}
            onClick={values => {
              this.props.dispatch(
                fetchDiaryFilms(
                  this.props.token,
                  this.props.userID,
                  values.searchInput
                )
              );
              this.props.reset();
            }}
          >
            Clear filter
          </button>
        </form>
      </section>
    );
  }
}

export default reduxForm({
  form: 'diarySearch'
})(DiarySearchForm);
