import React from 'react';
import ReactDOM from 'react-dom';
import App from './login/app';
import Game from './App';
import {Provider} from 'react-redux';
import store from './config/store';

const Main = () => {
    return (
        <App/>
    );
};


function renderGame() {
    ReactDOM.render(<Provider store={store}>
        <Game/>
    </Provider>, document.getElementById('root'));
}

const root = document.getElementById('root');
ReactDOM.render(<Main/>, root);

export default renderGame;

