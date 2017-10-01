import config from 'utils/config';
import fetch from 'isomorphic-unfetch';

export const getPlaceInfo = (token) => {
    const url = `${config.placesUrl}${config.placeId}?fl=*,openingHours,breadcrumb,review,service,places`;

    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
};

export const getPlacePhotos = (token) => {
    const url = `${config.placesUrl}${config.placeId}/photos`;

    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
};

export const getPlaceReviews = (token) => {
    const url = `${config.placesUrl}${config.placeId}/reviews`;

    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
};