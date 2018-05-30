/**
 * VenueListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import './style.scss';

export default class VenueListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;
    const categories = item.categories.map((category) => (
      <div key={`repo-list-item-${item.id}-${category.id}`} className="category">
        <span>{category.name}</span>
        <img src={`${category.icon.prefix}64${category.icon.suffix}`} alt={'category icon'} />
      </div>
    ));
    const content = (
      <div className="venue-list-item">
        <div className="venue-info">
          <div>
            <span className="venue-header">{item.name}</span>
            <span className="venue-dis">{item.location.distance}m</span>
          </div>
          <p className="address">{item.location.formattedAddress}</p>
        </div>
        <div className="category-area">
          {categories}
        </div>
      </div>
    );
    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item.id}`} item={content} />
    );
  }
}

VenueListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};
