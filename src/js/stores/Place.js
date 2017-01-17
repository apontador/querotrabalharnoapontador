'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions';
import ApontadorAPI from '../util/apontador';
import credentials from '../util/constants';
const API = new ApontadorAPI(credentials);

const Places = Reflux.createStore({
    listenables: Actions,
    getPlaceById(placeId) {
        API.getPlaceById(placeId).then(place => {
            Actions.onPlace(place);
        });
    },
    onPlace(place) {
        this.place = place;
        this.trigger(place);
    }
});

export default Places;