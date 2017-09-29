import fetch from 'isomorphic-unfetch';
import {
  VILLAIN_SET_LOCATION,
  VILLAIN_FETCHING,
  VILLAIN_SET_POSSIBLE_LOCATION_ATTACKS,
  VILLAIN_SET_POSSIBLE_LOCATION
} from './';

export function getPossibleLocations(location){
  return async dispatch => {
    dispatch({ type: VILLAIN_FETCHING, payload: true });
    dispatch({ type: VILLAIN_SET_POSSIBLE_LOCATION_ATTACKS, payload: location });
    const response = await fetch(`http://code-challenge.maplink.com.br/coordinate?q=${location.latitude},${location.longitude}`);
    console.log(response);

    if(response.status !== 200){
      alert('Hey, Bat! Are you sure you are sending us the correct information?');
      dispatch({ type: VILLAIN_FETCHING, payload: false });
      return;
    }
    const json = await response.json();
    console.log(json);

    dispatch({ type: VILLAIN_SET_LOCATION, payload: json });
    dispatch({ type: VILLAIN_FETCHING, payload: false });
  };
}

export function setPossibleLocation(location){
  return dispatch => {
    dispatch({ type: VILLAIN_SET_POSSIBLE_LOCATION, payload: location });
  };
}