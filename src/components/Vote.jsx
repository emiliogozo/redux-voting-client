import React, { Component } from 'react';

class Vote extends Component {
  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
            <button key={entry}
              disabled={this.isDisabled()}
              onClick={() => this.props.vote(entry)}>
              <h1>{entry}</h1>
              {this.hasVotedFor(entry) ?
                <div className="label">Voted</div> :
                null}
            </button>
          )}
      </div>
    )
  }
  getPair() {
    return this.props.pair || [];
  }
  isDisabled() {
    return !!this.props.hasVoted;
  }
  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }
}

export default Vote;
