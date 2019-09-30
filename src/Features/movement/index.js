import store from '../../config/store'

function handleDirectionMove(e, direction) {
    console.log(`Moving ${direction}!`);
    store.dispatch({ type: "MOVE_PLAYER", payload: direction})
    e.preventDefault()
}

function handleKeyDown(e) {
    switch(e.keyCode) {
        case 40:
            handleDirectionMove(e, 'down');
            return;
        case 37:
            handleDirectionMove(e, 'left');
            return;
        case 39:
            handleDirectionMove(e, 'right');
            return;
        case 38:
            handleDirectionMove(e, 'up');
            return;
        default:
            console.log(e.keyCode)
    }
}

export default function handleMovement(wrappedComponent) {
    window.addEventListener('keydown', (e) => {
        handleKeyDown(e, wrappedComponent)
    });

    return wrappedComponent
}