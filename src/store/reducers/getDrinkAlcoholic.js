import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  alcoholicBeverages: '',
  isLoading: false,
});

function getDrinksAlcoholic(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'GET_ALCOHOLIC_REQUEST':
      return state.merge({ isLoading: true });
      case 'GET_ALCOHOLIC_SUCCESS':
        return state.merge({ alcoholicBeverages: action.payload.drinks, isLoading: false });
    case 'GET_ALCOHOLIC_FAIL':
      return state.merge({ isLoading: false });
    default:
      return state;
  }
}

export default getDrinksAlcoholic;
