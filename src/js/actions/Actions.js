'use strict';

import Reflux from 'reflux';

const Actions = Reflux.createActions([
    'getPlaceById',
    'getReviews',
    'getPhotos',
    'onPlace',
    'onReviews',
    'onPhotos',
    'getAddresses',
    'onAddresses'
]);

export default Actions;