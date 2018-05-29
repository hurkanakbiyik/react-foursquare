import React from 'react';
import MdSearch from 'react-icons/lib/md/search';
import PropTypes from 'prop-types';

import './style.scss';
import banner from './images/banner.png';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <img alt="banner" src={banner} />
        <div className="search-area">
          <MdSearch size={25} />
          <form onSubmit={this.props.onSubmitForm}>
            <input onChange={this.props.onChangeUsername} type="text" placeholder={'Search'} />
          </form>
        </div>
      </div>
    );
  }
}


Header.propTypes = {
  onChangeUsername: PropTypes.func,
  onSubmitForm: PropTypes.func,
};


export default Header;
