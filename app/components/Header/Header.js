import React from 'react';
import MdSearch from 'react-icons/lib/md/search';

import './style.scss';
import banner from './images/banner.png';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <img alt="banner" src={banner} />
        <div className="search-area">
          <MdSearch size={25} />
          <input type="text" placeholder={'Search'} />
        </div>
      </div>
    );
  }
}

export default Header;
