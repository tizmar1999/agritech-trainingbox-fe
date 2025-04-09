export const initialAnnotatedState = {
    data: [],
};

export function annotatedImagesReducer(state, action) {
    switch (action.type) {
        case 'SET_ANNOTATED':
            return { ...state, data: action.payload };
        case 'CLEAR':
            return { ...state, data: [] };
        default:
            return state;
    }
}
