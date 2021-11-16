import React from 'react';
import { connect } from 'react-redux';
import Teams from './Teams';

class TeamsContainer extends React.Component{
    render(){
        return <Teams />
    }
}

let mapStateToProps = (state) => {
    return true;
}

export default connect(mapStateToProps,{})(TeamsContainer);