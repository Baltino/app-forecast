export const actionTypes = {
  RESET_CITY: 'RESET_CITY',
  GET_CITY: 'GET_CITY',
  GET_CITY_SUCCESS: 'GET_CITY_SUCCESS',
  GET_CITY_FAILED: 'GET_CITY_FAILED',
  ADD_CITY: 'ADD_CITY',
  ADD_CITY_SUCCESS: 'ADD_CITY_SUCCESS',
  ADD_CITY_FAILED: 'ADD_CITY_FAILED',
  REMOVE_CITY: 'REMOVE_CITY',
  REMOVE_CITY_SUCCESS: 'REMOVE_CITY_SUCCESS',
  REMOVE_CITY_FAILED: 'REMOVE_CITY_FAILED',
  GET_USER_CITIES: 'GET_USER_CITIES',
  GET_USER_CITIES_SUCCESS: 'GET_USER_CITIES_SUCCESS',
  GET_USER_CITIES_FAILED: 'GET_USER_CITIES_FAILED',
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


export function addCity(city) {
  return {
    type: actionTypes.ADD_CITY,
    payload: {
      city,
    },
  };
}

export function addCitySuccess(sucessMessage, userCities) {
  return {
    type: actionTypes.ADD_CITY_SUCCESS,
    payload: {
      sucessMessage,
      userCities,
    },
  };
}

export function addCityFailed(errorMessage, error) {
  return {
    type: actionTypes.ADD_CITY_FAILED,
    payload: {
      errorMessage,
      error,
    },
  };
}

export function getUserCities() {
  return {
    type: actionTypes.GET_USER_CITIES,
  };
}

export function getUserCitiesSuccess(sucessMessage, userCities) {
  return {
    type: actionTypes.GET_USER_CITIES_SUCCESS,
    payload: {
      sucessMessage,
      userCities,
    },
  };
}

export function getUserCitiesFailed(errorMessage, error) {
  return {
    type: actionTypes.GET_USER_CITIES_FAILED,
    payload: {
      errorMessage,
      error,
    },
  };
}

export function removeCity(city) {
  return {
    type: actionTypes.REMOVE_CITY,
    payload: {
      city,
    },
  };
}

export function removeCitySuccess(sucessMessage, userCities) {
  return {
    type: actionTypes.REMOVE_CITY_SUCCESS,
    payload: {
      sucessMessage,
      userCities,
    },
  };
}

export function removeCityFailed(errorMessage, error) {
  return {
    type: actionTypes.REMOVE_CITY_FAILED,
    payload: {
      errorMessage,
      error,
    },
  };
}
