import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import { changeSearch } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      search: '',
      venues: false,
      total: 0,
      position: false
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeSearch action correctly', () => {
    const search = 'coffee';
    const expectedResult = state.set('search', search);

    expect(homeReducer(state, changeSearch(search))).toEqual(expectedResult);
  });
});
