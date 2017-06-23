import React from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import List from './List.jsx';
import Square from './Square';
import Board from './Board';

export default class App extends React.Component {

   render() {
      return (
         <Router>
            <div style={{textAlign: 'left'}}>
               <Square value="10">

               </Square>
               <Board>
               </Board>
               <h1 style={{textAlign: 'center'}}>Hello World</h1>
               <List name="users" />
               <Link to={`/home`} >
                  This is a link to home.
               </Link>
               <Link to={`/about`} >
                  This is a link to about.
               </Link>
               <Route path="/home" component={Home} />
               <Route path="/about" component={About} />
            </div>
         </Router>
      );
   }
}

const Home = ({ match }) => (
   <div>
      <h2>Home.</h2>
      <p>I have no idea what is happening.</p>
   </div>
);

const About = () => (
   <div>
      <h2>About.</h2>
      <p>I have some idea what is happening.</p>
   </div>
);
