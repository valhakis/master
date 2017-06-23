import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

class Main extends React.Component {
   render() {
      return (
         <div>
            <h1>Main Component.</h1>
            <p>Consectetur modi ad error quo delectus ab. Ab nisi laboriosam quis error voluptas. Quia sunt harum ducimus totam dolore. Ad dolores nesciunt expedita explicabo odio obcaecati eos maxime neque impedit.</p>
         </div>
      );
   }
}

ReactDOM.render(<Main />, document.getElementById('root'));
