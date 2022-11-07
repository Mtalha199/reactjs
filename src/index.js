import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      //React fragment is use to write diffrent JSX 
      //React fragment dont use extra memory
      <React.Fragment>
      <h1>Hello this is my first react web</h1>
      <p>One day In Sha ALLAH become a developer</p>
      <h2>coming soon</h2>
      </React.Fragment>,
);

