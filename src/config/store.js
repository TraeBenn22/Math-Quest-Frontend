import {createStore, combineReducers} from 'redux';
import playerReducer from '../Features/Player/reducer'
import mapReducer from "../Features/map/reducer";
import modelReducer from "../model/reducer";

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
    model: modelReducer,
});



const store = createStore(
rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

