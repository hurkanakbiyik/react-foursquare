/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectUsername, makeSelectPosition } from './selectors';

import foursquareService from '../../services/foursquare/foursquare.services';
import { LOAD_VENUES, LOCATION_CHANGED } from './constants';
import { venuesLoaded, venuesLoadingError } from './actions';
export function* getVenues() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const location = yield select(makeSelectPosition());
  try {
    const result = yield call(foursquareService,
      '/venues/explore',
      { method: 'GET' },
      {
        ll: `${location.coords.latitude},${location.coords.longitude}`,
        query: username
      });
    yield put(venuesLoaded(result, username));
  } catch (err) {
    yield put(venuesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homeSagaWatcher() {
  yield takeLatest(LOAD_VENUES, getVenues);
  yield takeLatest(LOCATION_CHANGED, getVenues);
}
