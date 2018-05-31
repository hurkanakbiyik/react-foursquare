import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { changeUsername, loadVenues, changeLocation } from './actions';
import {
  makeSelectPosition,
  makeSelectSearch,
  makeSelectTotal,
  makeSelectUsername,
  makeSelectVenues,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    // dispatch(loadRepos());
    dispatch(loadVenues());
  },
  checkLocation: () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      dispatch(changeLocation(position));
    });
  }
});

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  venues: makeSelectVenues(),
  username: makeSelectUsername(),
  search: makeSelectSearch(),
  total: makeSelectTotal(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  position: makeSelectPosition()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
