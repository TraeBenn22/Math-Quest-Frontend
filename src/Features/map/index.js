import React from 'react';
import {TILE_SIZE} from '../../config/constants';
import './styles.css';

function battleQuestions() {
    let text;
    let choice = prompt("What is the difference of 10 and 8?");
    switch(choice) {
        case 2:
            text = "Correct! you defeated the monster!";
            break;
        case -2:
            text = "so lcose";
            break;
        default:
            text ="Oh no! You managed to dodge the hit, but probably not the next one";
            break;
    }
}

function getTileDisplay(type) {
    switch(type) {
        case 1:
            return 'monster';
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
                        { row.map((tile, x) =>
                            <div
                                key={x}
                                className={`tile ${getTileDisplay(tile)}`}
                                style={{
                                    width: `${TILE_SIZE}px`,
                                    height: `${TILE_SIZE}px`,
                                }}
                            />) }
                    </div>
                )
            }
        </div>
    )
}

// function mathQuestion() {
//     prompt('What is 2 + 2?');
// }

// if(Player){
//     window.addEventListener('position', mathQuestion);
// }

export default Map;