import api from '../../services/api';

export default getDrinksAlcoholic = () => async (dispatch) => {
  dispatch({ type: 'GET_ALCOHOLIC_REQUEST' });

  api.get('/api/json/v1/1/filter.php?a=Alcoholic').then(
    function (response) {
      dispatch({ type: 'GET_ALCOHOLIC_SUCCESS', payload: response.data});
    })
    .catch(function (error) {
      console.log(`erro: ${error}`);
      dispatch({ type: 'GET_ALCOHOLIC_FAIL' });
    });
};
