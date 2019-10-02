import {createStore, combineReducers} from 'redux';
import playerReducer from '../Features/Player/reducer'
import mapReducer from "../Features/map/reducer";
import modelReducer from "../model/reducer";
import undoable from 'redux-undo';

const rootReducer = combineReducers({
    player: undoable(playerReducer),
    map: undoable(mapReducer),
    model: undoable(modelReducer),
});



const store = createStore(
rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

