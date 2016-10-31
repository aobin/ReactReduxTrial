import axios from "axios";

import{CHANGE_LANG} from "../constants/ActionTypes";


export function changeLang(text)
{
    return { type: CHANGE_LANG, text }
}
