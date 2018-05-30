/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';
import Header from '../../components/Header/Header';
import PointViewer from '../../components/PointViewer/PointViewer';
import VenuesList from '../../components/VenuesList/VenuesList';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const {
      loading, error, venues, total
    } = this.props;
    const venuessListProps = {
      loading,
      error,
      venues,
      total
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <Header {...this.props} />
          <section>
            <div className="list-area">
              <VenuesList {...venuessListProps} />
            </div>
            <div className="map-area">
              <PointViewer {...venuessListProps} />
            </div>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  venues: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  search: PropTypes.string,
  total: PropTypes.number,
  onChangeUsername: PropTypes.func,
};
