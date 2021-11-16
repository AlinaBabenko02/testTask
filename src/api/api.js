import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://www.balldontlie.io/api/v1/'
});

export const teamsAPI = {
    getTeams() {
        debugger;
        return instance.get('teams'
        ).then((response) => response.data.data);
    },
    getTeamsCount(){
        return instance.get('teams'
        ).then((response) => response.data.meta);
    }
}

export const playersAPI = {
    getPlayers(){
        return instance.get('players'
        ).then((responce)=>responce.data.data)
    },
    getPlayersCount(){
        return instance.get('players'
        ).then((responce)=>responce.data.meta)
    }
}
