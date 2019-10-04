import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  ReactDOM.render(<div>Hello</div>, document.createElement('root'));
});
