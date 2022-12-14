import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from "../../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case CLEAR_ERRORS:
            return [];
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_ERRORS:
            return action.errors.responseJSON;
        default:
            return state;
    }
}

export default sessionErrorsReducer
