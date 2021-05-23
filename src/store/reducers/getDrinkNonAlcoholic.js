import Immutable from 'seamless-immutable';

const initialValues = Immutable({
  nonAlcoholicBeverages: {},
  isLoading: false
});

function getDrinksNonAlcoholic(state = initialValues, action) {
  switch(action.type) {
    case 'GET_NON_ALCOHOLIC_REQUEST':
      return state.merge({ isLoading: true });
    case 'GET_NON_ALCOHOLIC_SUCCESS':
      return state.merge({ nonAlcoholicBeverages: action.payload.drinks, isLoading: false })
    case 'GET_NON_ALCOHOLIC_FAIL':
      return state.merge({ isLoading: false });
    default:
      return state;
  }
}

export default getDrinksNonAlcoholic;
