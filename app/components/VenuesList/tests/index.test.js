import { shallow, mount } from 'enzyme';
import React from 'react';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import VenuesList from '../VenuesList';

describe('<VenuesList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(<VenuesList loading />);
    expect(
      renderedComponent.contains(<List component={LoadingIndicator} />)
    ).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <VenuesList loading={false} error={{ message: 'Loading failed!' }} />
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });
});
