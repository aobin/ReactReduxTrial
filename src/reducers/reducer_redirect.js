import {WEBAUTH_SIGNIN} from "../constants/ActionTypes";

export const pageDefault = {
    signedin: false
};

/**
 * The reducer controls the state of the axios or ajax call.
 * returning the current state with any changes from the
 * actions dispatchers
 *
 *
 * @param state
 * @param action
 * @returns {*}
 */
function redirectPage(state = pageDefault, action) {

    switch (action.type) {
        case WEBAUTH_SIGNIN:
            return {...pageDefault, signedin : false};
        default:
            return {...pageDefault, signedin : false};
    }

    return state;
}

// usage: this.props.location
export default redirectPage;