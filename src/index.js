// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  return <div>Hi there!</div>;
};

// Take the react componenet and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}