import store from '../../config/store';
import { TILE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../config/constants';

function respectBoundaries(oldPos, newPos) {
    return newPos[0] >= 0 &&
        newPos[0] <= MAP_WIDTH - TILE_SIZE &&
        newPos[1] >= 0 &&
        newPos[1] <= MAP_HEIGHT - TILE_SIZE
}

function attemptMove(oldPos, newPos) {
    let canMove = respectBoundaries(oldPos, newPos);
    if (canMove) {
        canMove = respectObstructions(oldPos, newPos);
        animateWalk()
    }

    return (canMove) ? newPos : oldPos
}

function respectObstructions(oldPos, newPos) {
    const x = newPos[0]/TILE_SIZE;
    const y = newPos[1]/TILE_SIZE;
    const { tiles } = store.getState().map;
    return (tiles[y][x] <= 5)
}


function handleDirectionMove(e, direction) {
    const state = store.getState();
    console.log(state);
    store.dispatch({
        type: "MOVE_PLAYER",
        payload: {
            position: getNewPosition(state.player.position, direction),
            direction: direction,
            spriteLocation: getSpriteLocation(direction),
        }
    });
    e.preventDefault()
}

function getNewPosition(oldPos, direction) {
    switch(direction) {
        case 'west':
            return attemptMove(
                oldPos,
                [ oldPos[0]-TILE_SIZE, oldPos[1] ]
            );

        case 'east':
            return attemptMove(
                oldPos,
                [ oldPos[0]+TILE_SIZE, oldPos[1] ]
            );

        case 'north':
            return attemptMove(
                oldPos,
                [ oldPos[0], oldPos[1]-TILE_SIZE ]
            );

        case 'south':
            return attemptMove(
                oldPos,
                [ oldPos[0], oldPos[1]+TILE_SIZE ]
            );

        default:
            return  [ oldPos[0], oldPos[1] ]
    }
}

function getSpriteLocation(direction) {
    const wi = store.getState().player.walkIndex;
    if(store.getState().player.position === [520, 80]) {
        prompt('hello how many');
    }
    switch(direction) {
        case 'south':
            return `${TILE_SIZE*wi}px ${0}px`;
        case 'east':
            return `${TILE_SIZE*wi}px ${TILE_SIZE}px`;
        case 'west':
            return `${TILE_SIZE*wi}px ${TILE_SIZE*2}px`;
        case 'north':
            return `${TILE_SIZE*wi}px ${TILE_SIZE*3}px`;
        default:
            return null;


    }
}

function handleKeyDown(e) {

    switch(e.keyCode) {
        case 40:
            handleDirectionMove(e, 'south');
            return;
        case 37:
            handleDirectionMove(e, 'west');
            return;
        case 39:
            handleDirectionMove(e, 'east');
            return;
        case 38:
            handleDirectionMove(e, 'north');
            return;
        default:
    }
}

function updateWalkIndex() {
    const index = store.getState().player.walkIndex;
    return (index < 8) ? index+1 : 0
}

function animateWalk() {
    store.dispatch({type: 'UPDATE_WALK_INDEX', payload: updateWalkIndex()})
}

export default function handleMovement(wrappedComponent) {
    window.addEventListener('keydown', (e) => {
        handleKeyDown(e, wrappedComponent)
    });

    return wrappedComponent
}