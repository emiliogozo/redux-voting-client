import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';

class Voting extends PureComponent {
  render() {
    return (
      <div>
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pair: state.getIn(['vote', 'pair']),
  winner: state.get('winner')
});

const VotingContainer = connect(mapStateToProps)(Voting);

export { Voting, VotingContainer };

