import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectSearch, makeSelectPosition } from './selectors';

import foursquareService from '../../services/foursquare/foursquare.services';
import { LOAD_VENUES, LOCATION_CHANGED } from './constants';
import { venuesLoaded, venuesLoadingError } from './actions';

export function* getVenues() {
  const search = yield select(makeSelectSearch());
  const location = yield select(makeSelectPosition());
  try {
    const result = yield call(foursquareService,
      '/venues/explore',
      { method: 'GET' },
      {
        ll: `${location.coords.latitude},${location.coords.longitude}`,
        query: search
      });
    yield put(venuesLoaded(result, search));
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
