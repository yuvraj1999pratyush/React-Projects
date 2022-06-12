const initialState = {
    posts : [],
    len: 0,
    post: []
}

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL': 
            return{
                ...state,
                posts: action.payload,
                len: action.len
            };
        case 'FETCH_ONE':
            return {
                ...state,
                post: action.payload
            }
        default:
            return state;
    }
}

export default apiReducer;