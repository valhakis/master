import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
//import createBrowserHistory from 'history/lib/createBrowserHistory';
//var history = createBrowserHistory();
//var history = {};

export default class Awesome {
   constructor() {
      console.log("I'm the most awesome person in the world.");
   }
}

const Routes = (
   <div>

   </div>
   //<Router /*history={history}*/>
   //<h1>Awesome App.</h1>
   //</Router>
)

render(Routes, document.getElementById('awesome'))

