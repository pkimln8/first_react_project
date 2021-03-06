// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = { text: 'Click me'};
  const labelText = 'Enter name: ';
  const style = { backgroundColor:'steelblue', color: 'white'};

  return (
  <div>
    <label className="label" htmlFor="name">{labelText}</label>
    <input id="name" type="text"/>
    <button style={style}>
      {buttonText.text}
    </button>
  </div>
  );
};

// Take the react componenet and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}