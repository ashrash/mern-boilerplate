import { all } from 'redux-saga/effects';
import { combinedSaga as productSaga } from './products/sagas';

export default function* rootSaga() {
  yield all([
    productSaga(),
  ]);
}
