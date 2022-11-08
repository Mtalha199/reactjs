//REACT Template Literal
import React from 'react';
import ReactDOM from 'react-dom/client';

let my_var="talha";
let fname="Arshad Mehmood";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>
      //if we want to write all in one line we use many method but now we do in Template literal
      <h1>{`My name is ${my_var} My father name is ${fname}`}</h1>
      
      <h2>My Age is {20+2}</h2>
      <h3>My lucky num is {Math.random()}</h3>
      </>
);


