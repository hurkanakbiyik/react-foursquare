import 'whatwg-fetch';

const withQuery = require('with-query');

const API = {
  CLIENT_ID: 'UOGYOTM4AOOHWH44BUDKH32ITC5WQKNXJWHAMKC1GBJZ5AGE',
  CLIENT_SECRET: 'WKEQJHSRORL4Y5CX3G4V3QVQM0WU1C4PVI1CRI3R3WEGZPBL',
  URL: 'https://api.foursquare.com/v2'
};

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default function request(path, options, q) {
  const newQ = {
    v: new Date().toISOString().slice(0, 10).replace(/-/g, ''),
    client_id: API.CLIENT_ID,
    client_secret: API.CLIENT_SECRET,
    ...q
  };
  const newuRL = `${API.URL + path}`;
  return fetch(withQuery(newuRL, newQ), options)
    .then(checkStatus)
    .then(parseJSON);
}
