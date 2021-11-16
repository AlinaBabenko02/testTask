import { Formik } from 'formik';
import React from 'react';
import TeamsTableContainer from './TeamsTable/TeamsTableContainer';

const Teams = (props) => {
    return <div>
        <h2>Teams</h2>
        <div>Form</div> 
        <div>
            <TeamsTableContainer />
        </div>
    </div>
}


export default Teams;