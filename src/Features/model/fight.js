import React from 'react'
import { connect } from 'react-redux'
import { range, sample } from '../../trackerArray'

function FightModel(props) {
    return <div style={{

    }}>
        <div className='enemy'>
            <img src={'./mobs/goblin.png'} alt={props.enemy.name} />
        </div>
        <div className='menu'>
        </div>
    </div>
}


function randomMob(mobs, levelRange) {
    const data = sample(mobs);
    return {
        ...data,
        health: parseInt(data.constitution * sample(range(...levelRange)))
    }
}

function mapStateToProps(state) {
    return {
        map: state.map,
        enemy: randomMob(state.map.mobs, state.map.levelRange)
    }
}

export default connect(mapStateToProps)(FightModel)