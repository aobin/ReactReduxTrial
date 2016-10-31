export const CountryListActionType=
{
    SHOW_COUNTRY_LIST:"SHOW_COUNTRY_LIST",
    HIDE_COUNTRY_LIST:"HIDE_COUNTRY_LIST"
};

export function showCountryList()
{
    return {type:CountryListActionType.SHOW_COUNTRY_LIST};
}

export function hideCountryList()
{
    return {type:CountryListActionType.HIDE_COUNTRY_LIST};
}
