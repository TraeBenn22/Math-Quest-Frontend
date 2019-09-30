import React from 'react';
import {Component} from 'react';
import handleMovement from './Features/movement'
import map from './Features/map/';
import Player from './Features/Player/'
import {MAP_HEIGHT, MAP_WIDTH} from './config/constants'
import './App.css';

class App extends Component {
  render() {
    return (
        <div style={{
            height: MAP_HEIGHT,
            width: MAP_WIDTH,
        }}
        >
          <map />
          <Player />
        </div>
    )
  }
}

export default handleMovement(App);
