export default function(state, action) {
  // compute and return the new state
  if (state === undefined) {
    return [];
  }

  // handle actions
  // switch(action.type) {
  //   case 'SET_FLATS':
  //     return action.playload;
  //   default:
  //     return state;
  // }
  if (action.type === 'SET_CITIES') {
    return action.payload;
  } else {
    return state;
  }
}

//export default CitiesReducer;
