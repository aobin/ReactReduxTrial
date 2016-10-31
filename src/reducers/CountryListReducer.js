import {CountryListActionType} from "../actions/CountryListAction";

export const defaultCountryListState=
{
    display:"none"
};

 function countryList(state=defaultCountryListState,action)
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

export default countryList;

