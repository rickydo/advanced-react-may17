import React from 'react';
import Key from 'key';

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="help">
          Pick 4 numbers that sum to the target in 15 seconds
        </div>
        <div className="target">42</div>
        <div className="challenge-numbers">
          <Key value={8} />
          <Key value={5} />
          <Key value={12} />
          <Key value={13} />
          <Key value={5} />
          <Key value={16} />
        </div>
        <div className="footer">
          <div className="timer-value">15</div>
          <button>Start</button>
        </div>
      </div>
    );
  }
}
