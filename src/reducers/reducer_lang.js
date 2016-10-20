import {CHANGE_LANG} from "../constants/ActionTypes";

export const langDefault = {
    lang: "en_us"
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
function lang(state = langDefault, action) {

    switch (action.type) {
        case CHANGE_LANG:
            return {...langDefault, lang : "fr_ca"};
        default:
            return {...langDefault, lang : "en_us"};
    }

    return state;
}

// usage: this.props.location
export default lang;