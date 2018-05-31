/**
 * Tests for HomePage sagas
 */

import { takeLatest } from 'redux-saga/effects';

import saga, { getVenues } from '../saga';
import { LOAD_VENUES } from '../constants';
/* eslint-disable redux-saga/yield-effects */

describe(' Saga', () => {
  const Saga = saga();

  it('should start task to watch for LOAD_VENUES action', () => {
    const takeLatestDescriptor = Saga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_VENUES, getVenues));
  });
});
