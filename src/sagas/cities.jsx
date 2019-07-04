// npm packages
import { takeLatest, call, put, select } from 'redux-saga/effects';

import {
  actionTypes,
  getCitySuccess,
  getCityFailed,
  addCitySuccess,
  addCityFailed,
  addCity,
  getUserCitiesSuccess,
  getUserCitiesFailed,
  removeCitySuccess,
  removeCityFailed,
} from '../actions/cities';

// actions
import { getCity } from '../api/cities';

// utils
// worker sagas
function* getCitySaga(action) {
  try {
    const response = yield call(getCity, action.payload.name);
    if (response) {
      yield put(getCitySuccess('successCity', response.data));
      yield put(addCity(response.data));
    } else {
      yield put(getCityFailed('someError', response.data));
    }
  } catch (e) {
    yield put(getCityFailed('serverError', e));
  }
}

function* addCitySaga(action) {
  try {
    const state = yield select();
    const { city } = action.payload;
    const cities = state.cities.userCities;
    if (cities.filter(c => c.id === city.id).length) {
      return;
    }
    if (cities.length >= 5) {
      cities.shift();
    }
    const allCities = [...cities, city];
    localStorage.setItem('userCities', JSON.stringify(allCities));
    yield put(addCitySuccess('addedCity', allCities));
  } catch (e) {
    yield put(addCityFailed('addError', e));
  }
}

function* removeCitySaga(action) {
  try {
    const state = yield select();
    const { city } = action.payload;
    const cities = [...state.cities.userCities.filter(c => c.id !== city.id)];
    localStorage.setItem('userCities', JSON.stringify(cities));
    yield put(removeCitySuccess('removedCity', cities));
  } catch (e) {
    yield put(removeCityFailed('addError', e));
  }
}

function* getUserCitiesSaga() {
  try {
    const cities = localStorage.getItem('userCities');
    yield put(getUserCitiesSuccess('gotCities', JSON.parse(cities)));
  } catch (e) {
    yield put(getUserCitiesFailed('addError', e));
  }
}

export default function* mediaSaga() {
  yield takeLatest(actionTypes.GET_CITY, getCitySaga);
  yield takeLatest(actionTypes.ADD_CITY, addCitySaga);
  yield takeLatest(actionTypes.REMOVE_CITY, removeCitySaga);
  yield takeLatest(actionTypes.GET_USER_CITIES, getUserCitiesSaga);
}
