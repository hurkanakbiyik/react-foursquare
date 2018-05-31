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

import { CHANGE_USERNAME, LOAD_VENUES, LOAD_VENUES_ERROR, LOAD_VENUES_SUCCESS, LOCATION_CHANGED } from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  search: '',
  venues: false,
  total: 0,
  position: false
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));
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
        .set('search', action.search)
        .set('currentUser', action.username);
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
