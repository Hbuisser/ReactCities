import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    //const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;

    if (!this.props.selectedCity) {
      return (
        <div className="active-city">
          Select a city
        </div>
      )
    }

    return (
      <div className="active-city">
        <h3>{this.props.selectedCity.name}</h3>
        <p>{this.props.selectedCity.address}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps)(ActiveCity);
