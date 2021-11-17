import React from 'react';
import { connect } from 'react-redux';
import TeamsForm from './TeamsForm';
import { setNewTeam } from '../../../redux/teams_reducer'

class TeamsFormContainer extends React.Component {

    render() {
        return <TeamsForm setNewTeam={this.props.setNewTeam} />
    }
}

let mapStateToProps = (state) => {
    return {
        myTeams: state.teamsBlock.myTeams
    }
}

export default connect(mapStateToProps, { setNewTeam })(TeamsFormContainer);