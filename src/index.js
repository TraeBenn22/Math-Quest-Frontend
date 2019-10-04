import React from 'react';
import ReactDOM from 'react-dom';
import App from './login/app';
import Game from './App';
import {Provider} from 'react-redux';
import store from './config/store';


function renderGame() {
    ReactDOM.render(<Provider store={store}>
        <Game/>
    </Provider>, document.getElementById('root'));
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);

export default renderGame;

