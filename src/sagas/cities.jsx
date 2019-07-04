// npm packages
import { takeLatest, call, put } from 'redux-saga/effects';

import {
  actionTypes,
  getCitySuccess,
  getCityFailed,
} from '../actions/cities';

// actions
import { getCity } from '../api/cities';

// utils
// worker sagas
function* getCitySaga(action) {
  try {
    const response = yield call(getCity, action.payload.titleId);
    if (response) {
      yield put(getCitySuccess('successCity', response.data));
    } else {
      yield put(getCityFailed('someError', response.data));
    }
  } catch (e) {
    yield put(getCityFailed('serverError', e));
  }
}

export default function* mediaSaga() {
  yield takeLatest(actionTypes.GET_CITY, getCitySaga);
}
