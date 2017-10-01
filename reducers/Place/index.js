import { GET_PLACE, GET_PLACE_FAIL, GET_PLACE_SUCCESS, GET_PLACE_PHOTOS_SUCCESS, GET_PLACE_REVIEWS_SUCCESS} from 'actions';

export default function (state = {
    info: {},
    fetching: false,
    fail: false,
    error: {},
    photos: [],
    reviews: []
}, action) {
  switch (action.type) {
      case GET_PLACE:
        return { ...state, fetching: true, fail: false, error: {} };
      case GET_PLACE_FAIL:
          return { ...state, fetching: false, fail: true, error: action.payload };
      case GET_PLACE_SUCCESS:
          return { ...state, fetching: false, fail: false, error: {}, info: {...action.payload} };
      case GET_PLACE_PHOTOS_SUCCESS:
          return { ...state, photos: action.payload };
      case GET_PLACE_REVIEWS_SUCCESS:
          return { ...state, reviews: action.payload };
    default:
      return state;
  }
}