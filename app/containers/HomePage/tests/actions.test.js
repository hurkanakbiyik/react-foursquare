import { CHANGE_SEARCH } from '../constants';

import { changeSearch } from '../actions';

describe('Home Actions', () => {
  describe('changeSearch', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_SEARCH,
        name: fixture
      };

      expect(changeSearch(fixture)).toEqual(expectedResult);
    });
  });
});
