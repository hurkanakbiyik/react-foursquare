import {
  CHANGE_SEARCH,
  LOAD_VENUES,
  LOAD_VENUES_SUCCESS,
  LOAD_VENUES_ERROR,
  LOCATION_CHANGED,
} from './constants';

export function changeSearch(search) {
  return {
    type: CHANGE_SEARCH,
    search
  };
}

export function loadVenues() {
  return {
    type: LOAD_VENUES,
  };
}

export function venuesLoaded(payload, search) {
  return {
    type: LOAD_VENUES_SUCCESS,
    payload,
    search,
  };
}

export function venuesLoadingError(error) {
  return {
    type: LOAD_VENUES_ERROR,
    error,
  };
}

export function changeLocation(position) {
  return {
    type: LOCATION_CHANGED,
    payload: position
  };
}

