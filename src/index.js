import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component that produces some HTML
const App = () => {
  return <div>Hello world!</div>;
}

// Take the component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
