/**
 * Test the HomePage
 */

import React from 'react';
import { mount } from 'enzyme';

import HomePage from '../HomePage';
import { mapDispatchToProps } from '../index';
import { changeSearch, loadVenues } from '../actions';

describe('<HomePage />', () => {
  it('should render fetch the repos on mount if a search exists', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        search="Not Empty"
        onChangeSearch={() => {}}
        onSubmitForm={submitSpy}
        checkLocation={() => {}}
      />
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if search is an empty string', () => {
    const submitSpy = jest.fn();
    mount(<HomePage onChangeSearch={() => {}} onSubmitForm={submitSpy} checkLocation={() => {}} />);
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is null', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        username=""
        onChangeSearch={() => {}}
        onSubmitForm={submitSpy}
        checkLocation={() => {}}
      />
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeSearch', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeSearch).toBeDefined();
      });

      it('should dispatch changeSearch when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'flexdinesh';
        result.onChangeSearch({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeSearch(username));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadRepos when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadVenues());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
