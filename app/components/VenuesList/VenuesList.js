import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import VenueListItem from '../VenueListItem/VenueListItem';

const VenuesList = ({ loading, error, venues }) => {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (venues !== false) {
    return <List items={venues} component={VenueListItem} />;
  }

  return null;
};

VenuesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  venues: PropTypes.any
};

export default VenuesList;
