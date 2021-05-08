import { all } from 'redux-saga/effects';
import authSaga from './auth-saga';
import filmsSaga from './films-saga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    filmsSaga(),
  ]);
};
