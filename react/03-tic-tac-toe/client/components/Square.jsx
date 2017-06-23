import React from 'react';

export default class Square extends React.Component {
   constructor() {
      super();
      this.state = {
         value: null
      };
   }
   render() {
      return (
         <div>
            <button onClick={() => this.setState({ value: 'X' })}>
               {this.state.value ? this.state.value : 'set state value to X'}
            </button>
            <button className="square" onClick={() => this.props.onClick()}>
               {this.props.value} is the value.
            </button>
         </div>
      );
   };
}
