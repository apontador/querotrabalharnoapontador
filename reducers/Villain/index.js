import { VILLAIN_SET_LOCATION, VILLAIN_FETCHING, VILLAIN_SET_POSSIBLE_LOCATION_ATTACKS, VILLAIN_SET_POSSIBLE_LOCATION } from 'actions';

export default function (state = {
  fetching: false,
  info: {},
  villainPosition: {},
  possibleLocation: {}
}, action) {
  switch (action.type) {
    case VILLAIN_SET_POSSIBLE_LOCATION_ATTACKS:
      return { ...state, villainPosition: {...action.payload},  };
    case VILLAIN_SET_LOCATION:
      return { ...state, info: {...action.payload},  };
    case VILLAIN_FETCHING:
      return { ...state, fetching: action.payload  };
    case VILLAIN_SET_POSSIBLE_LOCATION:
      return { ...state, possibleLocation: action.payload  };
    default:
      return state;
  }
}