import React, {Component} from 'react';
import sampleSize from 'lodash.samplesize';

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
    selectedKeys: []
  }

  // not part of the state, just onload
  challengeKeys = Array.from({length: 6}).map(() => randomNumberBetween(2, 10));
  target = sampleSize(this.challengeKeys, 4).reduce((acc, curr) => curr + acc, 0);

  selectKey = (keyId) => {
    this.setState((prevState) => {
      if (prevState.gameStatus !== 'playing') {
        return null;
      }
      // setState is asynchronous
      // using updater function guarantees you dont run into race conditions
      // prevState.selectedKeys
      const newSelectedKeys = [
        ...prevState.selectedKeys,
        keyId
      ]
      return {
        selectedKeys: newSelectedKeys, // js spread array: copies first array and adds in 2nd param
        gameStatus: this.calcGameStatus(newSelectedKeys)
      }
    });
  };

  calcGameStatus = (newSelectedKeys) => {
    if (newSelectedKeys.length !== 4) {
      return 'playing';
    }

    const sumSelected = newSelectedKeys.reduce((acc, curr) => {
      acc + this.challengeKeys[curr],
      0
    });

    console.log("sumSelected", sumSelected);
    return (
      sumSelected === this.target
      ? 'won'
      : 'lost')
  }

  render() {
    return (<div className="game">
      <div className="help">Pick 4 numbers that sum to the target in 15 seconds</div>
      <div className="target" style={{
          backgroundColor: targetColors[this.state.gameStatus]
        }}>{this.target}</div>
      <div className="challenge-numbers">
        {
          this.challengeKeys.map((value, index) => (<Key key={index} value={value} isClickable={this.state.selectedKeys.indexOf(index) === -1} id={index} onClickAction={this.selectKey}
            // pass Key component fn
/>))
        }
        {/* // if you do anything like reordering or removing elements
                       // do not use index as a key
                       // the key component needs to just know if it's selected or not */
        }
        </div>
    </div>);
  }
}

export default Game;
