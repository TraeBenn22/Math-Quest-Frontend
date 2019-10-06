import {createStore, combineReducers} from 'redux';
import playerReducer from '../Features/Player/reducer'
import mapReducer from "../Features/map/reducer";
import modelReducer from "../model/reducer";
import GameOvermodelReducer from "../Game-Over-Modal/reducer";


const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
    model: modelReducer,
    Gmodel: GameOvermodelReducer,
});


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

//This is my overall store of information in my redux app
