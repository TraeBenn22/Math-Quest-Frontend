import React from 'react'
import {connect} from 'react-redux'
import GameOver from './fight'
import './styles.css'

function handleKeyDown(e) {
    e.preventDefault();
    switch (e.keyCode) {
        case 40:
            console.log('down');
            return;
        case 37:
            console.log('left');
            return;
        case 39:
            console.log('right');
            return;
        case 38:
            console.log('up');
            return;
        default:
            console.log(e.keyCode);
            return
    }
}

function setupKeyCapture(props) {
    window.addEventListener('keydown', (e) => {
        if (props.visible) handleKeyDown(e)
    })
}

function renderModel(props) {
    switch (props.type) {
        case 'GAME OVER':
            return <GameOver/>;
    }


}
function GoModel(props) {
    setupKeyCapture(props);
    return (
        <div
            style={{display: props.visible ? 'block' : 'none'}}
            className='Gomodel'
        >
            <h1>{props.type}!</h1>
            <div>{renderModel(props)}</div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state.model
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openModal: (type) => {
            dispatch({type: 'OPEN_MODEL'})
        },
        closeModal: () => {
            dispatch({type: 'CLOSE_MODEL'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoModel)