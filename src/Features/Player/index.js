import React from 'react';
import {TILE_SIZE} from "../../config/constants";
import {connect} from 'react-redux';
import './styles.css';
import walkSprite from './player_walk.png';

//my dispatch for the player, his ability to move and the image to update accordingly across the tile and map

function mapDispatchToProps(dispatch) {
    return {
        move: (direction) => {
            dispatch({type: 'MOVE_PLAYER', payload: direction})
        }
    }
}

function mapStateToProps(state) {
    return {
        ...state.player
    }
}

function Player(props) {
    return (
        <div
            className='player'
            style={{
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: props.spriteLocation,
                width: `${TILE_SIZE}px`,
                height: `${TILE_SIZE}px`,
            }}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)