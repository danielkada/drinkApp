import api from '../../services/api';

export default getDrinksNonAlcoholic = () => async dispatch => {
  dispatch({ type: 'GET_NON_ALCOHOLIC_REQUEST' });

  api.get('/api/json/v1/1/filter.php?a=Non_Alcoholic').then(
    function (response) {
      dispatch({ type: 'GET_NON_ALCOHOLIC_SUCCESS', payload: response.data});
    })
    .catch(function (error) {
      console.log(`erro: ${error}`);
      dispatch({ type: 'GET_NON_ALCOHOLIC_FAIL' });
    });
};
