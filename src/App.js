import React from 'react';
import { connect } from 'react-redux';
import handleMovement from './Features/movement'
import Map from './Features/map/';
import Player from './Features/Player/'
import tiles from './maps/2';
import {MAP_HEIGHT, MAP_WIDTH} from './config/constants'
import './App.css';



function mapStateToProps(state) {
    return {
        tiles: state.map.tiles
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTiles: (tiles) => {
            dispatch({type: "ADD_TILES", payload: tiles})
        }
    }
}

function App(props) {
    props.addTiles(tiles);
    return(
        <div className="map"
             style={{
                 height: MAP_HEIGHT,
                 width: MAP_WIDTH,
             }}
             > <Map tiles={props.tiles} />
             <Player/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(handleMovement(App))
