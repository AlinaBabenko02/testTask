import { teamsAPI } from "../api/api";

const SET_TEAMS = 'SET_TEAMS';
const SET_TEAMS_COUNT = 'SET_TEAMS_COUNT';

let initialState = {
    teams: [],
    teamsCount: 0
};

const teamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEAMS:
            debugger;
            return {
                ...state,
                teams: action.teams
            }
        case SET_TEAMS_COUNT:
            debugger;
            return {
                ...state,
                teamsCount: action.count
            }
        default:
            return state;
    }
}

export const setTeams = (teams) => {debugger;
    return { type: SET_TEAMS, teams} }
export const setTeamsCount = (teamsCount) => ({ type: SET_TEAMS_COUNT, count: teamsCount })

export const getTeams = () => {
    return (dispatch) => {
        debugger;
        teamsAPI.getTeams().then(data => {
            dispatch(setTeams(data));
        });
    }
}

export const getTeamsCount = () => {
    return (dispatch) => {
        teamsAPI.getTeamsCount().then(data => {
            dispatch(setTeamsCount(data.total_count));
        });
    }
}

export default teamsReducer;