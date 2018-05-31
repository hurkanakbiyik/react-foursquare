/**
 * Test the repo list item
 */

import React from 'react';
import { shallow, render } from 'enzyme';

import ListItem from 'components/ListItem';
import VenueListItem from '../VenueListItem';

const renderComponent = (props = {}) => render(<VenueListItem {...props} />);

describe.only('<VenueListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      id: 1,
      name: 'test',
      location: {
        distance: 100,
        formattedAddress: 'test'
      },
      categories: [
        {
          id: 1,
          icon: {
            suffix: 'url',
            prefix: 'test'
          }
        }
      ]
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(<VenueListItem item={item} />);
    expect(renderedComponent.find(ListItem).length).toBe(1);
  });
  it('should render the repo name', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.name);
  });
});
