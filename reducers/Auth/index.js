import { AUTHENTICATE, AUTHENTICATION_FAIL, AUTHENTICATION_COMPLETE } from 'actions';

export default function (state = {
    info: {},
    authenticating: false,
    fail: false,
    error: {}
}, action) {
  switch (action.type) {
      case AUTHENTICATE:
        return { ...state, authenticating: true, fail: false, error: {} };
      case AUTHENTICATION_FAIL:
          return { ...state, authenticating: false, fail: true, error: action.payload };
      case AUTHENTICATION_COMPLETE:
          return { ...state, authenticating: false, fail: false, error: {}, info: action.payload };
    default:
      return state;
  }
}