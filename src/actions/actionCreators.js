import * as actions from './actions';
import * as request from './request';

export function dispatchFetchPosts() {
  const actionName = actions.GET_POSTS;

  return (dispatch) => {
    dispatch(request.inFlight(actionName));
    fetchPosts()
      .then(json => dispatch(request.successful(actionName, json)))
      .catch(err => {
        dispatch(request.error(actionName, err));
      });
  };
};

function fetchPosts() {
  const endpoint = `https://jsonplaceholder.typicode.com/posts`;
  return get(endpoint);
}

function get(endpoint) {
  return fetch(endpoint, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(resp => resp.ok ? resp.json() : Promise.reject("request failed"));
}
