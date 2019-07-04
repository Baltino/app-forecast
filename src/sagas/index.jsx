import { all } from 'redux-saga/effects';

// sagas
import citiesSaga from './cities';

export default function* rootSaga() {
  yield all([
    citiesSaga(),
  ]);
}
