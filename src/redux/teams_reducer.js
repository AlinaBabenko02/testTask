import { teamsAPI } from "../api/api";

const SET_TEAMS = 'SET_TEAMS';
const SET_TEAMS_COUNT = 'SET_TEAMS_COUNT';
const SET_NEW_TEAM = 'SET_NEW_TEAM';

let initialState = {
    myTeams: [],
    teams: [],
    teamsCount: 0
};

const teamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEAMS:
            return {
                ...state,
                teams: action.teams
            }
        case SET_TEAMS_COUNT:
            return {
                ...state,
                teamsCount: action.count
            }
        case SET_NEW_TEAM:
            return {
                ...state,
                myTeams: [action.team, ...state.myTeams]
            }
        default:
            return state;
    }
}

export const setTeams = (teams) => ({ type: SET_TEAMS, teams })
export const setTeamsCount = (teamsCount) => ({ type: SET_TEAMS_COUNT, count: teamsCount })
export const setNewTeam = (team) => {
    return { type: SET_NEW_TEAM, team }
}

export const getTeams = () => {
    return (dispatch) => {
        teamsAPI.getTeams().then(data => {
            dispatch(setTeams(data.data));
        });
    }
}

export const getTeamsCount = () => {
    return (dispatch) => {
        teamsAPI.getTeamsCount().then(data => {
            dispatch(setTeamsCount(data.meta.total_count));
        });
    }
}

export default teamsReducer;