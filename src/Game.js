import React, { Component } from 'react';

import Key from './Key';

const randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

class Game extends Component {
  // not part of the state, just onload
  challengeKeys = Array.from({ length: 6 }).map(() => randomNumberBetween(2, 10));
  target = this.challengeKeys.slice(0, 4).reduce((curr, acc) => curr + acc, 0);
  render() {
    return (
      <div className="game">
        <div className="help">Pick 4 numbers that sum to the target in 15 seconds</div>
        <div className="target">{this.target}</div>
        <div className="challenge-numbers">
          {this.challengeKeys.map((value, index) => <Key key={index} value={value} />)}
                       {/* // if you do anything like reordering or removing elements
                       // do not use index as a key */}
        </div>
        <div className="footer">
          <div className="timer-value">15</div>
          <button>Start</button>
        </div>
      </div>
    );
  }
}

export default Game;
