import { applyMiddleware, combineReducers, createStore } from "redux";
import teamsReducer from "./teams_reducer";
import playersReducer from "./players_reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
   teamsBlock: teamsReducer,
   playersBlock: playersReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;