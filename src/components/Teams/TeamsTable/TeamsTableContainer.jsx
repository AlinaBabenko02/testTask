import React from 'react';
import { connect } from 'react-redux';
import TeamsTable from './TeamsTable';
import { getTeams, getTeamsCount } from '../../../redux/teams_reducer'

class TeamsTableContainer extends React.Component {
    componentDidMount() {
        this.props.getTeams();
        this.props.getTeamsCount();
    }

    render() {
        return <TeamsTable teams={this.props.teams}
            teamsCount={this.props.teamsCount}
            myTeams={this.props.myTeams}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        teams: state.teamsBlock.teams,
        teamsCount: state.teamsBlock.teamsCount,
        myTeams: state.teamsBlock.myTeams
    };
}

export default connect(mapStateToProps, { getTeams, getTeamsCount })(TeamsTableContainer);