import React from 'react'
import { connect } from 'react-redux'
import { range, sample } from '../trackerArray'
import goblin from './mobs/goblin.png';
import wolf from './mobs/wolf.png';
import spider from './mobs/spider.png';
import {playerCalc} from '../Features/Player/playerCalc'
import playerData from "../Features/Player/playerCalc";
import mobStats from '../maps/stuff/mobs'
import ReduxUndo from 'redux-undo';

function mobFinder(props) {
    if(props === 'goblin.png') {
        return goblin;
    } else if(props === 'wolf.png') {
        return wolf;
    } else {
        return spider;
    }


}

function mathPrompt() {
    let damage = playerData.strength;
   let question = prompt('What is 2 + 2?');
    if(question === '4') {
        alert(`You attack for ${damage} damage!`);
        if(playerCalc(mobStats[0].health)) {
            alert('You have defeated the monster!');
        } else {
            mobStats[0].health = mobStats[0].health - 2;
            alert('Looks like you just hurt him a bit, dont give up!')

        }
    } else {
        alert('Oh no, you took 3 damage!')
    }
}

function defendRoll() {
    alert("You dodged the attack!");
}

function FightModel(props) {
    return <div>
        <div className='enemy'>
            <img src={mobFinder(props.enemy.image)} alt={props.enemy.name} />
        </div>
        <div className='menu'>
            <ul className={'attack'} onClick={mathPrompt}>Attack</ul>
            <ul className={'defend'} onClick={defendRoll}>Defend</ul>
            <ul className={'run'}>Run</ul>
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