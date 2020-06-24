import React, { Component } from 'react';

class City extends Component {
  // handleClick = () => {
  //   // REDUX ACTION
  //   this.props.selectFlat(this.props.flat);
  // }

  render() {
    // const style = {
    //   backgroundImage: `url(${this.props.flat.imageUrl})`
    // };

    // const classes = "flat card";
    // if (this.props.flat === this.propselectedFlat) {
    //   classes += " selected";
    // }

    return (
        //<div className={classes} onClick={this.handleClick}>
          <div className="cities">
            <h1>{this.props.city.name}</h1>
          </div>
        //</div>
    );
  }
}



export default City;
