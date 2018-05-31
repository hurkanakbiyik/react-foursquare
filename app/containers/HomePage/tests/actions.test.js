import { CHANGE_SEARCH } from '../constants';

import { changeSearch } from '../actions';

describe('Home Actions', () => {
  describe('changeSearch', () => {
    it('should return the correct type and the passed search', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_SEARCH,
        search: fixture
      };

      expect(changeSearch(fixture)).toEqual(expectedResult);
    });
  });
});
