import { actionTypes } from '../actions/cities';
import { AJAX_STATUS } from '../actions/constants';

const initialState = {
  currentCity: undefined,
  getStatus: AJAX_STATUS.firstCheck,
  userCities: [],
  successMessage: '',
  errorMessage: '',
};

export default function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CITY:
      return {
        ...state,
        getStatus: AJAX_STATUS.loading,
      };
    case actionTypes.GET_CITY_SUCCESS:
      return {
        ...state,
        getStatus: AJAX_STATUS.success,
        currentCity: action.payload.city,
      };
    case actionTypes.GET_CITY_FAILED:
      return {
        ...state,
        getStatus: AJAX_STATUS.error,
        errorMessage: action.payload.errorMessage,
      };
    case actionTypes.RESET_CITY:
      return {
        ...state,
        getStatus: AJAX_STATUS.firstCheck,
        currentCity: undefined,
      };
    case actionTypes.ADD_CITY_SUCCESS:
      return {
        ...state,
        userCities: action.payload.userCities,
      };
    case actionTypes.GET_USER_CITIES_SUCCESS:
      return {
        ...state,
        userCities: action.payload.userCities || [],
      };
    case actionTypes.REMOVE_CITY_SUCCESS:
      return {
        ...state,
        userCities: action.payload.userCities,
      };
    default:
      return state;
  }
}
