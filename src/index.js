//REACT Expression
import React from 'react';
import ReactDOM from 'react-dom/client';

//we can access a variable by {}
let my_var="talha";
let fname="Arshad Mehmood";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>
      <h1>My name is {my_var}</h1>
      <p>My father name is {fname}</p>
      <h2>My Age is {20+2}</h2>
      <h3>My lucky num is {Math.random()}</h3>
      </>
      //we cant use in statment e.g loop,condition etc 
);


