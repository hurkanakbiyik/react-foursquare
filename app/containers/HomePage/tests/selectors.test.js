import { fromJS } from 'immutable';

import {
  selectHome,
  makeSelectSearch,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectSearch', () => {
  const usernameSelector = makeSelectSearch();
  it('should select the username', () => {
    const search = 'coffee';
    const mockedState = fromJS({
      home: {
        search,
      },
    });
    expect(usernameSelector(mockedState)).toEqual(search);
  });
});
