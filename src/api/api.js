import axios from 'axios';

export const teamsAPI = {
    getTeams() {
        return axios.get('https://www.balldontlie.io/api/v1/teams').then((response) => response.data);;
    },
    getTeamsCount() {
        return axios.get('https://www.balldontlie.io/api/v1/teams').then((response) => response.data);
    }
}

export const playersAPI = {
    getPlayers() {
        return axios.get('https://www.balldontlie.io/api/v1/players').then((responce) => responce.data)
    },
    getPlayersCount() {
        return axios.get('https://www.balldontlie.io/api/v1/players').then((responce) => responce.data)
    }
}
