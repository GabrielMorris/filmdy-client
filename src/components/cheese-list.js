// React
import React from 'react';
import { connect } from 'react-redux';

import { fetchCheeses } from '../actions/cheese';

// Components
// Styles

class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  generateCheeseList() {
    return this.props.cheeses.map(cheese => {
      return <li>{cheese}</li>;
    });
  }

  render() {
    return <ul>{this.generateCheeseList()}</ul>;
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);
