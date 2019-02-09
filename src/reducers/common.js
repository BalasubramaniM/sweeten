import {
    APP_LOAD,
    CHANGE_PAGE
} from "../constants/actionTypes";

const defaultState = {
    appName: "Sweeten",
    appLoaded: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOAD:
            return {
                ...state,
                data: action.payload,
                activePage: 1,
                appLoaded: true
            };
        case CHANGE_PAGE:
            return {
                ...state,
                activePage: action.value
            };
        default:
            return state;
    }
};
