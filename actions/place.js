import {
    GET_PLACE,
    GET_PLACE_SUCCESS,
    GET_PLACE_FAIL,
    GET_PLACE_PHOTOS_SUCCESS,
    GET_PLACE_REVIEWS_SUCCESS
} from 'actions';

import {getPlaceInfo, getPlacePhotos, getPlaceReviews} from 'utils/PlaceService';


export function getPlace(token){
    return dispatch => {

        dispatch({ type: GET_PLACE });
        getPlaceInfo(token)
            .then(function(res) {
                return res.json();
            })
            .then(function(resJson) {
                console.log({...resJson.place} );
                dispatch({ type: GET_PLACE_SUCCESS, payload: {...resJson.place} });
                getPictures(token, dispatch);
            })
            .catch(e => {
                console.log("ERRO: " + e);
                dispatch({ type: GET_PLACE_FAIL, payload: e });
            });
    };

}

function getPictures(token, dispatch) {
        getPlacePhotos(token)
            .then(function (res) {
                return res.json();
            })
            .then(function (resJson) {
                console.log(resJson);
                dispatch({type: GET_PLACE_PHOTOS_SUCCESS, payload: resJson.photoResults.photos});
                getReviews(token, dispatch);
            })
            .catch(e => {
                console.log("ERRO: " + e);
            });
}

function getReviews(token, dispatch) {
    getPlaceReviews(token)
        .then(function (res) {
            return res.json();
        })
        .then(function (resJson) {
            console.log(resJson);
            dispatch({type: GET_PLACE_REVIEWS_SUCCESS, payload: resJson.reviewResults.reviews});
        })
        .catch(e => {
            console.log("ERRO: " + e);
        });
}