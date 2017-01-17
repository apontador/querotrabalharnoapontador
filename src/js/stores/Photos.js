'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions';
import ApontadorAPI from '../util/apontador';
import credentials from '../util/constants';
const API = new ApontadorAPI(credentials);

const Photos = Reflux.createStore({
    listenables: Actions,
    getPhotos(placeId) {
        API.getPlacePhotos(placeId).then(photos => {
            Actions.onPhotos(photos);
        });
    },
    onPhotos(photos) {
        this.photos = photos;
        this.trigger(photos);
    }
});

export default Photos;