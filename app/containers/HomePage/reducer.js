/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { CHANGE_SEARCH, LOAD_VENUES, LOAD_VENUES_ERROR, LOAD_VENUES_SUCCESS, LOCATION_CHANGED } from './constants';

// The initial state of the App
const initialState = fromJS({
  search: '',
  venues: false,
  total: 0,
  position: false
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH:
      return state.set('search', action.search);
    case LOCATION_CHANGED:
      return state.set('position', action.payload);
    case LOAD_VENUES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('venues', false);
    case LOAD_VENUES_SUCCESS: {
      const venues = action.payload.response.groups[0].items.map((item) => item.venue);
      return state
        .set('venues', venues)
        .set('total', action.payload.response.totalResults)
        .set('loading', false)
        .set('search', action.search);
    }
    case LOAD_VENUES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
