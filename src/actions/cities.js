export const actionTypes = {
  RESET_CITY: 'RESET_CITY',
  GET_CITY: 'GET_CITY',
  GET_CITY_SUCCESS: 'GET_CITY_SUCCESS',
  GET_CITY_FAILED: 'GET_CITY_FAILED',
};

export function resetCity() {
  return {
    type: actionTypes.RESET_CITY,
  };
}

export function getCity(name) {
  return {
    type: actionTypes.GET_CITY,
    payload: {
      name,
    },
  };
}

export function getCitySuccess(sucessMessage, city) {
  return {
    type: actionTypes.GET_CITY_SUCCESS,
    payload: {
      sucessMessage,
      city,
    },
  };
}

export function getCityFailed(errorMessage, error) {
  return {
    type: actionTypes.GET_CITY_FAILED,
    payload: {
      errorMessage,
      error,
    },
  };
}
