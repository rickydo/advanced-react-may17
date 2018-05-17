import React, { Component } from 'react';

import Key from './Key';

const randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const targetColors = {
  'playing': 'blue',
  'won': 'green',
  'lost': 'red'
}

class Game extends Component {
  state = {
    gameStatus: 'playing', // 'won', 'lost'
    selectedKeys: [],
  }

  // not part of the state, just onload
  challengeKeys = Array.from({ length: 6 }).map(() => randomNumberBetween(2, 10));
  target = this.challengeKeys.slice(0, 4).reduce((curr, acc) => curr + acc, 0);

  selectKey = (keyId) => {
    this.setState((prevState) => {
      // setState is asynchronous
      // using updater function guarantees you dont run into race conditions
      // prevState.selectedKeys
      return {
        selectedKeys: [...prevState.selectedKeys, keyId] // js spread array: copies first array and adds in 2nd param
      }
    });
  };

  render() {
    return (
      <div className="game">
        <div className="help">Pick 4 numbers that sum to the target in 15 seconds</div>
        <div className="target" style={{backgroundColor: targetColors[this.state.gameStatus]}}>{this.target}</div>
        <div className="challenge-numbers">
          {this.challengeKeys.map((value, index) => (
            <Key
              key={index}
              value={value}
              isClickable={this.state.selectedKeys.indexOf(index) === -1}
              id={index}
              onClickAction={this.selectKey} // pass Key component fn
         />))}
                       {/* // if you do anything like reordering or removing elements
                       // do not use index as a key
                       // the key component needs to just know if it's selected or not */}
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
