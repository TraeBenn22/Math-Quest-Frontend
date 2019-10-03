import React from 'react'
import {connect} from 'react-redux'
import {range, sample} from '../trackerArray'
import goblin from './mobs/goblin.png';
import wolf from './mobs/wolf.png';
import spider from './mobs/spider.png';
import {playerCalc} from '../Features/Player/playerCalc'
import playerData from "../Features/Player/playerCalc";
import mobStats from '../maps/stuff/mobs'
import store from '../config/store';


function getRandomNumber() {
    return Math.floor(Math.random() * Math.floor(15));
}


function mobFinder(props) {
    if (props === 'goblin.png') {
        return goblin;
    } else if (props === 'wolf.png') {
        return wolf;
    } else {
        return spider;
    }
}

let counter = 0;

function mathPrompt() {
    let firstNumber = getRandomNumber();
    let secondNumber = getRandomNumber();
    let damage = playerData.strength;
    let question = prompt(`What is ${firstNumber} + ${secondNumber}?`);
    console.log(firstNumber + secondNumber);
    if (question == firstNumber + secondNumber) {
        alert(`You attack for ${damage} damage!`);
        if (playerCalc(mobStats[0].health)) {
            alert('You have defeated the monster!');
            mobStats[0].health = 6;
            store.dispatch({
                type: 'HIDE_MODEL',
                payload: {}
            })
        } else {

            mobStats[0].health = mobStats[0].health - 2;
            alert('Looks like you just hurt him a bit, dont give up!')

        }
    } else {
        alert('Oh no, you took 3 damage!');
        counter++;
        console.log(counter);
        if (counter === 2) {
            alert('Looks like your days of adventuring are over...');
            store.dispatch({
                type: 'HIDE_MODEL',
                payload: {
                    type: 'FIGHT'
                }
            });
            store.dispatch({
                type: 'SHOW_MODEL',
                payload: {
                    type: 'GAME OVER'
                }
            });

        }
    }
}


function defendRoll() {
    alert("You dodged the attack!");
}

function escape() {
    alert('Looks like you got away this time!');
    store.dispatch({
        type: 'HIDE_MODEL',
        payload: {}
    })
}

function GameOver() {
    return <div>
        <div className='gameOver'>
            <p>
                You did very well to get this far.
            </p>
            <p>
                Wow you did it very well
            </p>
            <p>
                hello what the heck
            </p></div>
    </div>
}

function FightModel(props) {
    return <div>
        <div className='enemy'>
            <img src={mobFinder(props.enemy.image)} alt={props.enemy.name}/>
        </div>
        <div className='menu'>
            <ul className={'attack'} onClick={mathPrompt}>Attack</ul>
            <ul className={'defend'} onClick={defendRoll}>Defend</ul>
            <ul className={'run'} onClick={escape}>Run</ul>
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

export default connect(mapStateToProps)(FightModel, GameOver)