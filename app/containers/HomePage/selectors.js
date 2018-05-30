/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

const makeSelectVenues = () => createSelector(
  selectHome,
  (homeState) => homeState.get('venues')
);

const makeSelectSearch = () => createSelector(
  selectHome,
  (homeState) => homeState.get('search')
);

const makeSelectTotal = () => createSelector(
  selectHome,
  (homeState) => homeState.get('total')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectSearch,
  makeSelectVenues,
  makeSelectTotal,
};
