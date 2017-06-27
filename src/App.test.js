import React from 'react';
import ReactDOM from 'react-dom';
import Local from './controllers/Local';
import Photo from './controllers/Photo';
import Relacionados from './controllers/Relacionados';
import Reviews from './controllers/Reviews';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Local />, div);
  ReactDOM.render(<Photo />, div);
  ReactDOM.render(<Relacionados />, div);
  ReactDOM.render(<Reviews />, div);
});
