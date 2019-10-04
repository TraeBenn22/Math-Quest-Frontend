import React from 'react';
import ReactDOM from 'react-dom';

const Main = () => {
  return (
      <App/>
  );
};

it('renders without crashing', () => {
  ReactDOM.render(<div>Hello</div>, document.createElement('root'));
});
