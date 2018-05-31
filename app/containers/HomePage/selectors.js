/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectSearch = () => createSelector(
  selectHome,
  (homeState) => homeState.get('search')
);

const makeSelectVenues = () => createSelector(
  selectHome,
  (homeState) => homeState.get('venues')
);

const makeSelectTotal = () => createSelector(
  selectHome,
  (homeState) => homeState.get('total')
);

const makeSelectPosition = () => createSelector(
  selectHome,
  (homeState) => homeState.get('position')
);

export {
  selectHome,
  makeSelectSearch,
  makeSelectVenues,
  makeSelectTotal,
  makeSelectPosition
};
