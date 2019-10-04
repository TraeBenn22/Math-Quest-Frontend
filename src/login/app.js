import React from 'react';

import Auth from './components/auth/auth';
import Login from './components/auth/login';
import LoginProviderFor from './components/auth/context';
import '../login.css';


const Read = () => {
    return (
        <Auth capability="read">
            <span>Read</span>
        </Auth>
    );
};

const Update = () => {
    return (
        <Auth capability="update">
            <span>Update</span>
        </Auth>
    );
};

class App extends React.Component {
    render() {
        return (
            <LoginProviderFor>
                <head><title>MATH QUEST</title></head>
                <Login/>
                <hr/>
                <Read/>
                <Update/>
            </LoginProviderFor>
        );
    }
}

export default App;