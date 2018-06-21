import actionTypes from '../action/actionTypes';
let initialState = {
    currentUser: {},
    isProgress: false,
    isError: false,
    errorText: '',
    counter: 0,
    latitude:0,
    longitude:0
}
function applicationSignInReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_LOCATION:
            return Object.assign({}, state, {longitude: action.obj.longitude, latitude: action.obj.latitude})
        case actionTypes.CLOSE_ERROR_ALERT:
            return Object.assign({}, state, { isError: false, isProgress: false});

        case actionTypes.LOGIN_SUCCEED:
            console.log('login ka action', action);
            return Object.assign({}, state, { currentUser: action.data, isProgress: false });

        case actionTypes.LOGIN_PROGRESS:
            return Object.assign({}, state, { isProgress: true });

        case actionTypes.LOGIN_ERROR:
            return Object.assign({}, state, { isError: true, errorText: action.error , isProgress: false});

        case actionTypes.LOGIN_ERROR_ALERT:
            return Object.assign({}, state, { isError: false, errorText: '', isProgress: false })

        default:
            return state;
    }
}

export default applicationSignInReducer;