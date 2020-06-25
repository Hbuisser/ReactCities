const selectedCityReducer = (state = null, action) => {
  // compute and return the new state
  // if (state === undefined) {
  //   return null;
  // }

  switch(action.type) {
    case 'SELECT_CITY':
      return action.payload;
    default:
      return state;
  }
}

export default selectedCityReducer;
