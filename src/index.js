//REACT JSX Attributes
//  JSX attributes is look like an html attributes it work also as html 

import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>
      
      {/* contentEditable is an attribute of JSX  */}
      <h1 contentEditable> MY NAME IS TALHA</h1>
      <img src='https://picsum.photos/200/300' alt='random pics' />

      {/* if i want to go another website by click on img */}
      <a href='https://www.w3schools.com/html/html_attributes.asp' >
            <img src='https://picsum.photos/250/300' />
      </a>

      </>
);


