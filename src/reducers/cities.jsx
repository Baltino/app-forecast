import { actionTypes } from '../actions/cities';
import { AJAX_STATUS } from '../actions/constants';

const initialState = {
  currentCity: {},
  getStatus: AJAX_STATUS.firstCheck,
  successMessage: '',
  errorMessage: '',
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CITY:
      return {
        ...state,
        getStatus: AJAX_STATUS.loading,
      };
    case actionTypes.GET_CITY_SUCCESS:
      return {
        ...state,
        currentCity: action.payload.city,
      };
    case actionTypes.GET_CITY_FAILED:
      return {
        ...state,
        paypalApproveStatus: AJAX_STATUS.error,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
