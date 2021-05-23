import api from '../../services/api';

export default getDrinkId = (id) => async dispatch => {
  dispatch({ type: 'GET_DRINK_ID_REQUEST' });

  api.get(`/api/json/v1/1/lookup.php?i=${id}`).then(
    function (response) {
      dispatch({ type: 'GET_DRINK_ID_SUCCESS', payload: response});
    })
    .catch(function (error) {
      dispatch({ type: 'GET_DRINK_ID_FAIL' });
    });
};
