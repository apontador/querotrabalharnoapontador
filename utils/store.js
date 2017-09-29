import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';

const isClient = typeof window !== 'undefined';

const enhancers = compose(
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension && window.devToolsExtension()
    : f => f,
);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default initialState => createStoreWithMiddleware(reducers, initialState, enhancers);