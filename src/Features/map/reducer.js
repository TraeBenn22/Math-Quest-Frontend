const initialState = {
    tiles: [],
};

const mapReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_DATA':
            return {
                ...action.payload,
            };

        default:
            return state
    }
};

export default mapReducer