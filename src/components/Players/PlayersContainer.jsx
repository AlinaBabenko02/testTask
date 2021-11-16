import React from 'react';
import { connect } from 'react-redux';
import Players from './Players';

class PlayersContainer extends React.Component{
    render(){
        return <Players />
    }
}

let mapStateToProps = (state) => {
    return true;
}

export default connect(mapStateToProps,{})(PlayersContainer);