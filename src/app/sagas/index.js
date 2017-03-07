/* eslint-disable no-console */
import { fork } from 'redux-saga/effects';

function logSaga() {
  console.log('Demo sagas activated successfully.');
}

export default function* testSagas() {
  yield [
    fork(logSaga),
  ];
}
