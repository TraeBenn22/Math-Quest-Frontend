const initialState = {
    visible: false,
};

const GameOvermodelReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_MODEL':
            return {
                visible: true,
                ...action.payload,
            };
        case 'HIDE_MODEL':
            return {
                visible: false,

            };
        default:
            return state
    }
};

export default GameOvermodelReducer