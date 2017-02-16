import { GET_POSTS } from '../actions/actions';

export default function posts(state = {
  inFlight: true,
  inError: false,
  data: null,
  error: null
}, action) {
  switch (action.type) {
  case GET_POSTS: {
    const { inFlight, inError, data, error } = action;

    if (inError) {
      return Object.assign({}, state, {
        inFlight: false,
        inError: true,
        error: error,
        data: [],
        query: action.query
      });
    } if (inFlight) {
      return Object.assign({}, state, {
        inFlight: true,
        query: action.query
      });
    } else {
      return {
        inFlight: false,
        inError: false,
        data: data,
        error: null,
        query: action.query
      };
    }
  }
  default:
    return state;
  }
}
