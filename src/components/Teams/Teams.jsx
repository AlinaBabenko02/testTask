import React from 'react';
import TeamsFormContainer from './TeamsForm/TeamsFormContainer';
import TeamsTableContainer from './TeamsTable/TeamsTableContainer';

const Teams = (props) => {
    return <div>
        <h2>Teams</h2>
        <div>
            <TeamsFormContainer />
        </div>
        <div>
            <TeamsTableContainer />
        </div>
    </div>
}



export default Teams;