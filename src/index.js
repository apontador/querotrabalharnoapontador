/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Local from './controllers/Local';
import Photo from './controllers/Photo';
import Relacionados from './controllers/Relacionados';
import Reviews from './controllers/Reviews';

ReactDOM.render(
  <Local />,
  document.getElementById('local')
);

ReactDOM.render(
  <Photo />,
  document.getElementById('photos')
);

ReactDOM.render(
  <Relacionados />,
  document.getElementById('recomendados')
);

ReactDOM.render(
  <Reviews />,
  document.getElementById('reviews')
);
