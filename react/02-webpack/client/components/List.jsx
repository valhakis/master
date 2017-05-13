import React from 'react';

class List extends React.Component {
   render() {
      return (
         <div className="list">
            <h1>List for {this.props.name}</h1>
            <ul>
               <li>William Valhakis.</li>
               <li>William Valhakis.</li>
               <li>William Valhakis.</li>
               <li>William Valhakis.</li>
            </ul>
         </div>
      );
   }
}
