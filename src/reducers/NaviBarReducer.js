import {CountryListActionType} from "../actions/CountryListAction";

export const defaultCountryListState=
{
    countryCode:"us",
    languageCode:"en"
};

 function naviBar(state=defaultCountryListState,action)
{
    switch(action.type)
    {
        case CountryListActionType.SHOW_COUNTRY_LIST:
            return {...state,display:"block"};
        case CountryListActionType.HIDE_COUNTRY_LIST:
            return {...state,display:"none"};
    }

    return state;
}

export default naviBar;

