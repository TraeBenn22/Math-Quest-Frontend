const initialState = {
    tiles: [],
};

//this reduces my information to my store, and will handle future payloads if needed
const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...action.payload,
            };

        default:
            return state
    }
};

export default mapReducer