'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions';
import ApontadorAPI from '../util/apontador';
import credentials from '../util/constants';
const API = new ApontadorAPI(credentials);

const Reviews = Reflux.createStore({
    listenables: Actions,
    getReviews(placeId) {
        API.getPlaceReview(placeId).then(reviews => {
            Actions.onReviews(reviews);
        });
    },
    onReviews(reviews) {
        this.reviews = reviews;
        this.trigger(reviews);
    }
});

export default Reviews;