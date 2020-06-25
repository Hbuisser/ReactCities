import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    return (
      <div className="list-group-item" onClick={this.handleClick}>
        <h1>{this.props.city.name}</h1>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedCity: reduxState.selectedCity
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(City);
