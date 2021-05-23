import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  details: '',
});

function getDrinkId(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'GET_DRINK_ID_REQUEST':
      return state;
    case 'GET_DRINK_ID_SUCCESS':
      return state.merge({ details: action.payload.data.drinks[0] });
    case 'GET_DRINK_ID_FAIL':
      return state;
    default:
      return state;
  }
}

export default getDrinkId;
