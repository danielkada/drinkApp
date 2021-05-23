import { combineReducers } from 'redux';

import getDrinksAlcoholic from './getDrinkAlcoholic';
import getDrinksNonAlcoholic from './getDrinkNonAlcoholic';
import getDrinkId from './getDrinkId';

export default combineReducers({
  getDrinksAlcoholic,
  getDrinksNonAlcoholic,
  getDrinkId,
});
