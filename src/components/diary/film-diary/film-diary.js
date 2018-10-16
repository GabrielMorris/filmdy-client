// React
import React from 'react';
import { connect } from 'react-redux';

// Components
import Card from '../film-cards/card';
import Grid from 'react-css-grid';

// Actions
import { fetchDiaryFilms } from '../../../actions/diary-actions';

// Styles

export class FilmDiary extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDiaryFilms(this.props.token, this.props.userID));
  }

  // Function for generating all the cards
  generateFilmCards() {
    console.log(this.props.diaryFilms);
    return this.props.diaryFilms.map(film => {
      return (
        <Card key={film.diaryID} film={film} history={this.props.history} />
      );
    });
  }

  render() {
    return (
      <Grid width={320} gap={24}>
        {this.generateFilmCards()}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  error: state.diary.error,
  diaryFilms: state.diary.diaryFilms,
  searchFilms: state.diary.searchFilms,
  userID: state.auth.currentUser.id,
  token: localStorage.getItem('authToken')
});

export default connect(mapStateToProps)(FilmDiary);
