import React from 'react';
import {TILE_SIZE} from '../../config/constants';
import './styles.css';

//This file creates my basic information for my map display

function getTileDisplay(type) {
    switch (type) {
        case 4:
            return 'tree';
        case 5:
            return 'chest';
        case 8:
            return 'tree';
        case 9:
            return 'rock';
        default:
            return 'path';
    }
}
// creates my Map display using a map funciton to loop through the tiles and generate it.
function Map(props) {
    return (
        <div style={{
            position: 'absolute',
        }}>
            {
                props.tiles.map((row, y) =>
                    <div
                        key={y}
                        className='row'
                        style={{
                            height: `${TILE_SIZE}px`,
                            lineHeight: `${TILE_SIZE}px`,
                        }}
                    >
                        {row.map((tile, x) =>
                            <div
                                key={x}
                                className={`tile ${getTileDisplay(tile)}`}
                                style={{
                                    width: `${TILE_SIZE}px`,
                                    height: `${TILE_SIZE}px`,
                                }}
                            />)}
                    </div>
                )
            }
        </div>
    )
}

export default Map;