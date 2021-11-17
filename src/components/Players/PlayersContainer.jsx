import React from 'react';
import { connect } from 'react-redux';
import Players from './Players';
import { getPlayers, getPlayersCount } from '../../redux/players_reducer'

class PlayersContainer extends React.Component {
    componentDidMount() {
        this.props.getPlayers();
        this.props.getPlayersCount();
    }

    render() {
        return <Players players={this.props.players}
            playersCount={this.props.playersCount} />
    }
}

let mapStateToProps = (state) => {
    return {
        players: state.playersBlock.players,
        playersCount: state.playersBlock.playersCount
    };
}

export default connect(mapStateToProps, { getPlayers, getPlayersCount })(PlayersContainer);