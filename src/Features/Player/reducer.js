const initialState = {
    position: [0, 0],
    direction: 'east',
    spriteLocation: '0 0',
};

//the reducer for my player's movement using cardinal directions, array positioning and reference location fo the sprite

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_PLAYER':
            return {
                ...state,
                ...action.payload,
            };

        case 'UPDATE_WALK_INDEX': {
            return {
                ...state,
                walkIndex: action.payload
            }
        }

        default:
            return state
    }
};

export default playerReducer