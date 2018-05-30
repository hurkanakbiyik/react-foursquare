/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

import foursquareService from '../../services/foursquare/foursquare.services';
import { LOAD_VENUES } from './constants';
import { venuesLoaded, venuesLoadingError } from './actions';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getVenues() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  try {
    const result = yield call(foursquareService,
      '/venues/explore',
      { method: 'GET' },
      {
        ll: '40.7243,-74.0018',
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
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOAD_VENUES, getVenues);
}
