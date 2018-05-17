import React, { Component } from 'react';
import './App.css';
import Game from './Game';

class App extends Component {
  state = {
    gameId: 1,
  };

  render() {
    return (
      <div className="App">
        <Game key={this.state.gameId}/>
        {/* use keys to replace game component for play again */}
        <button onClick={ () => {
          this.setState( (prevState) => ({
            gameId: prevState.gameId + 1
          }))
        }}>Play Again</button>
      </div>
    );
  }
}

export default App;
