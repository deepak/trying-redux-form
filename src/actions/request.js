/*
  REQUEST STATUS
*/

export function inFlight(type, params={}) {
  return Object.assign({}, {
    type: type,
    inFlight: true,
    inError: false
  }, params);
}

export function successful(type, data) {
  return {
    type,
    inFlight: false,
    inError: false,
    data
  };
}

export function error(type, error) {
  if (__DEV__) { console.dir(error); } // eslint-disable-line no-console

  return {
    type,
    inFlight: false,
    inError: true,
    error
  };
}
