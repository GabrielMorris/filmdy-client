// React
import React from 'react';

// Redux form
import { reduxForm, Field } from 'redux-form';

// Actions
import { fetchDiaryFilms } from '../../../actions/diary-actions';

export class DiarySearchForm extends React.Component {
  // On change capture the search value and then get matching diary films
  onChange(values) {
    const searchTerm = values.searchInput;
    this.props.dispatch(fetchDiaryFilms(this.props.token, searchTerm));
  }

  render() {
    return (
      <section>
        <form
          className="search-form"
          // Prevent submission
          onSubmit={event => event.preventDefault()}
          // Handle field value changes
          onChange={this.props.handleSubmit(values => this.onChange(values))}
        >
          <label htmlFor="searchInput">Filter: </label>
          <Field
            name="searchInput"
            type="text"
            placeholder="Filter films"
            component="input"
          />

          {/* Button that clears out any filter we have in the diary */}
          <button
            style={{
              display: 'inline-block'
            }}
            onClick={values => {
              this.props.dispatch(
                fetchDiaryFilms(this.props.token, values.searchInput)
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
