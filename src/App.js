import React from 'react'
import {connect} from 'react-redux'
import handleMovement from './Features/movement'
import Player from './Features/Player'
import Map from './Features/map/'
import Model from './model'
import map from './maps/stuff'
import PropTypes from 'prop-types';

import {MAP_HEIGHT, MAP_WIDTH} from './config/constants'

import './App.css'

function mapStateToProps(state) {
    return {
        map: state.map
    }
}

function mapDispatchToProps(dispatch) {
    return {
        persistMapData: (data) => {
            dispatch({type: "ADD_DATA", payload: data})
        }
    }
}

class App extends React.Component {
    componentDidMount() {
        this.props.persistMapData(map)
    }

    render() {
        return (
            <div
                className="map"
                style={{
                    height: MAP_HEIGHT,
                    width: MAP_WIDTH,
                }}
            >
                <Map {...this.props.map} />
                <Player/>
                <Model/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(handleMovement(App))
