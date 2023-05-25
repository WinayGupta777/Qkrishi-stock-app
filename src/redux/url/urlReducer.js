const initialState = {
    url: "okay"
}

const urlReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_URL": return {
            ...state,
            url: action.payload
        }
        default: return state
    }
};
export default urlReducer;