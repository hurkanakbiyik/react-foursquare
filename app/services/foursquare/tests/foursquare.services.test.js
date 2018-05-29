/**
 * Test the foursquare function
 */

import fourquareService from '../foursquare.services';

describe('foursquare', () => {
  describe('stubbing successful response', () => {
    it('should format the response correctly', (done) => {
      fourquareService('/venues/explore', {
        method: 'GET'
      }, {
        ll: '40.7243,-74.0018',
        query: 'coffee'
      })
        .catch((error) => done(error))
        .then((json) => {
          expect(json.meta).toBeDefined();
          expect(json.response).toBeDefined();
          done();
        });
    });
  });

  describe('stubbing error response', () => {
    it('should catch errors', (done) => {
      fourquareService('/venues/explore', {
        method: 'GET'
      }, {
      }).catch((err) => {
        expect(err.response.status).toBe(400);
        expect(err.response.statusText).toBe('Bad Request');
        done();
      });
    });
  });
});
