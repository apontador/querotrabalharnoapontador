import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


/*START REDUCER*/
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./reducers/RootReducer";
const store = createStore(RootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


