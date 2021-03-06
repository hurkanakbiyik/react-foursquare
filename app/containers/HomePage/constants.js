/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_SEARCH = 'boilerplate/Home/CHANGE_SEARCH';

export const LOAD_VENUES = 'boilerplate/App/LOAD_VENUES';
export const LOAD_VENUES_SUCCESS = 'boilerplate/App/LOAD_VENUES_SUCCESS';
export const LOAD_VENUES_ERROR = 'boilerplate/App/LOAD_VENUES_ERROR';
export const LOCATION_CHANGED = 'boilerplate/App/LOCATION_CHANGED';
