import React from 'react'
import {connect} from 'react-redux'
import {playerCalc} from '../Features/Player/playerCalc'
import playerData from "../Features/Player/playerCalc";
import store from '../config/store';

//WARNING- THESE FILES IN THIS DIRECTORY ARE NOT COMPLETE



function GameOver(props) {
    return (<div>
            <div className='gameOver'>
                {props.enemy.image}
            </div>
        </div>
    )
}





function mapStateToProps(state) {
    return {
        map: state.map,
        enemy: randomMob(state.map.mobs, state.map.levelRange)
    }
}

export default connect(mapStateToProps, )(GameOver)