import { playersAPI } from "../api/api";

const SET_PLAYERS = 'SET_PLAYERS';
const SET_PLAYERS_COUNT = 'SET_PLAYERS_COUNT';

let initialState = {
    players: [],
    playersCount: 0
};

const playersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYERS:
            return {
                ...state,
                players: action.players
            }
        case SET_PLAYERS_COUNT:
            return {
                ...state,
                playersCount: action.count
            }
        default:
            return state;
    }
}

export const setPlayers = (players) => ({ type: SET_PLAYERS, players })
export const setPlayersCount = (playersCount) => ({ type: SET_PLAYERS_COUNT, count: playersCount })

export const getPlayers = () => {
    return (dispatch) => {
        playersAPI.getPlayers().then(data => {
            dispatch(setPlayers(data.data));
        });
    }
}

export const getPlayersCount = () => {
    return (dispatch) => {
        playersAPI.getPlayersCount().then(data => {
            dispatch(setPlayersCount(data.meta.total_count));
        });
    }

}

export default playersReducer;