import React from 'react';

import Auth from './components/auth/auth';
import Login from './components/auth/login';
import LoginProvider from './components/auth/context';
import '../login.css';


const Read = props => {
    return (
        <Auth capability="read">
            <span>Read</span>
        </Auth>
    );
};

const Update = props => {
    return (
        <Auth capability="update">
            <span>Update</span>
        </Auth>
    );
};

class App extends React.Component {
    render() {
        return (
            <LoginProvider >
                <head><title>MATH QUEST</title></head>
                <Login  />
                <hr />
                <Read />
                <Update />
            </LoginProvider>
        );
    }
}

export default App;