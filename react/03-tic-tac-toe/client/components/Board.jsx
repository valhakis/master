import React from 'react';

import Square from './Square';

var player = { score: 1, name: 'Jeff' };

player.score = 2;

var newPlayer = Object.assign({}, player, {score: 2});

export default class Board extends React.Component {
   constructor() {
      super();
      this.state = {
         squares: Array(9).fill(null)
      };
   }
   handleClick(i) {
      console.log(`Handling click on ${i}`);
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares: squares});
   }
   renderSquare(i) {
      return <Square 
         value={this.state.squares[i]}
         onClick={() => this.handleClick(i)}
         />;
   }
   render() {
      const status = 'Next player: X';

      return (
         <div>
            <div className="status">{ status }</div>
            <div className="board-row">
               {this.renderSquare(0)}
               {this.renderSquare(1)}
               {this.renderSquare(2)}
            </div>
            <div className="board-row">
               {this.renderSquare(3)}
               {this.renderSquare(4)}
               {this.renderSquare(5)}
            </div>
            <div className="board-row">
               {this.renderSquare(6)}
               {this.renderSquare(7)}
               {this.renderSquare(8)}
            </div>
         </div>
      );
   }
}
