import React, { Component } from 'react';
import City from '../containers/city.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';


class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="list-group-item">
        {this.props.cities.map((city) => <City city={city} key={city.name}/>)}
      </div>
    );
  }
}

function DispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function ReduxStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  }
}

export default connect(ReduxStateToProps, DispatchToProps)(CityList);

