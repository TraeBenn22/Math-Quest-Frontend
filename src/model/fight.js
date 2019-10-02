import React from 'react'
import { connect } from 'react-redux'
import { range, sample } from '../trackerArray'
import goblin from './mobs/goblin.png';
import wolf from './mobs/wolf.png';
import spider from './mobs/spider.png';

function mobFinder(props) {
    if(props === 'goblin.png') {
        return goblin;
    } else if(props === 'wolf.png') {
        return wolf;
    } else {
        return spider;
    }


}

function FightModel(props) {
    return <div style={{

    }}>
        <div className='enemy'>
            <img src={mobFinder(props.enemy.image)} alt={props.enemy.name} />
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