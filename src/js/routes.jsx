'use strict';

import React from 'react';
import { Router, Route, Redirect } from 'react-router';

import App from './App';
import Ops from './views/Ops';
import Place from './views/Place';

export default (
    <Router>
        <Route component={ App }>
            <Route name="Place" path="/:category/:state/:city/:place/:placeId/:placeName" component={ Place } ignoreScrollBehavior />
            <Route name="Ops" path="/Ops" component={ Ops } />
            <Redirect from="/" to="/local/sp/sao_paulo/parques/B37822W2/parque_do_ibirapuera" />{/**Redirect apenas para o teste */}
            <Redirect from="*" to="/Ops" />
        </Route>
    </Router>
);
