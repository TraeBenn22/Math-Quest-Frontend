import React from 'react';
import Player from '../Player/';

function Map(props) {
    return (
        <div
            style={{
                width: '800px',
                height: '400px',
                backgroundColor: 'black',
                border: '4px solid white',
            }}
        />
    )
}

function mathQuestion() {
    prompt('What is 2 + 2?');
}

if(Player){
    window.addEventListener('position', mathQuestion);
}

export default Map;