'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions';
import ApontadorAPI from '../util/apontador';
import credentials from '../util/constants';
const API = new ApontadorAPI(credentials);

const Addresses = Reflux.createStore({
    listenables: Actions,
    getAddresses(params) {
        API.addresses(params).then(reviews => {
            Actions.onAddresses(reviews);
        });
    },
    onAddresses(Addresses) {
        this.Addresses = Addresses;
        this.trigger(Addresses);
    }
});

export default Addresses;