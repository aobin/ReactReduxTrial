import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
// import {showCountryList} from "../../actions/CountryListAction";

export class CountryList extends React.Component
{

    constructor(props)
    {
        super(props);
        let {countryList} = this.props;
        console.log("countryList in CountryList constructor");
        console.log(countryList);
    }

    componentDidMount()
    {
        let countryListConponent = document.getElementsByClassName("countrySelector list")[0];
        console.log("countryListConponent");
        console.log(countryListConponent);
        console.log("countryListConponent.style");
        console.log(countryListConponent.style);

    }

    render()
    {

        let {countryList}=this.props;
        console.log("countrylist from CountryList render: ");
        console.log(countryList);
        console.log("display from CountryList render: ");
        console.log(countryList.display);

        let countryListConponent = document.getElementsByClassName("countrySelector list")[0];
        if(countryListConponent)
        {
            console.log("CountryList render, set display");
            countryListConponent.style.display=countryList.display;
        }else
        {
            console.log("doesn't find CountryList,can not set display");
        }

        return <div className="countrySelector list">
            <span className="countrySelectorMenu arrow"></span>
            <div className="countrylist doubleColumn">
                <ul className="countrylistcol1">


                    <li className="au countryFlag countryIconLi countryLeftItem">
                        <a id="GNBLocale_en_AU" tabIndex="211">Australia (English)</a>
                    </li>


                    <li className="be countryFlag countryIconLi countryLeftItem">
                        <a id="GNBLocale_fr_BE" tabIndex="212">Belgique (Français)</a>
                    </li>


                    <li className="be countryFlag countryIconLi countryLeftItem">
                        <a id="GNBLocale_nl_BE" tabIndex="213">België (Nederlands)</a>
                    </li>


                    <li className="br countryFlag countryIconLi countryLeftItem">
                        <a id="GNBLocale_pt_BR" tabIndex="214">Brasil (Português)</a>
                    </li>


                    <li className="ca countryFlag countryIconLi countryLeftItem">
                        <a id="GNBLocale_en_CA" tabIndex="215">Canada (English)</a>
                    </li>


                    <li className="ca countryFlag countryIconLi countryLeftItem">
                        <a id="GNBLocale_fr_CA" tabIndex="216">Canada (Français)</a>
                    </li>


                    <li className="dk countryFlag countryIconLi countryLeftItem">
                        <a id="GNBLocale_da_DK" tabIndex="217">Danmark (Dansk)</a>
                    </li>


                    <li className="de countryFlag countryIconLi countryLeftItem">
                        <a id="GNBLocale_de_DE" tabIndex="218">Deutschland (Deutsch)</a>
                    </li>


                    <li className="es countryFlag countryIconLi countryLeftItem">
                        <a id="GNBLocale_es_ES" tabIndex="219">España (Español)</a>
                    </li>


                    <li className="fr countryFlag countryIconLi countryLeftItem">
                        <a id="GNBLocale_fr_FR" tabIndex="220">France (Français)</a>
                    </li>


                    <li className="in countryFlag countryIconLi countryLeftItem">
                        <a id="GNBLocale_en_IN" tabIndex="221">India (English)</a>
                    </li>


                    <li className="ie countryFlag countryIconLi countryLeftItem">
                        <a id="GNBLocale_en_IE" tabIndex="222">Ireland (English)</a>
                    </li>


                    <li className="it countryFlag countryIconLi countryLeftItem">
                        <a id="GNBLocale_it_IT" tabIndex="223">Italia (Italiano)</a>
                    </li>


                    <li className="mx countryFlag countryIconLi countryLeftItem">
                        <a id="GNBLocale_es_MX" tabIndex="224">México (Español)</a>
                    </li>


                    <li className="nl countryFlag countryIconLi countryRightItem">
                        <a id="GNBLocale_nl_NL" tabIndex="225">Nederland (Nederlands)</a>
                    </li>


                    <li className="nz countryFlag countryIconLi countryRightItem">
                        <a id="GNBLocale_en_NZ" tabIndex="226">New Zealand (English)</a>
                    </li>


                    <li className="pl countryFlag countryIconLi countryRightItem">
                        <a id="GNBLocale_pl_PL" tabIndex="227">Polska (Polski)</a>
                    </li>


                    <li className="ch countryFlag countryIconLi countryRightItem">
                        <a id="GNBLocale_de_CH" tabIndex="228">Schweiz (Deutsch)</a>
                    </li>


                    <li className="ch countryFlag countryIconLi countryRightItem">
                        <a id="GNBLocale_fr_CH" tabIndex="229">Suisse (Français)</a>
                    </li>


                    <li className="se countryFlag countryIconLi countryRightItem">
                        <a id="GNBLocale_sv_SE" tabIndex="230">Sverige (Svenska)</a>
                    </li>


                    <li className="uk countryFlag countryIconLi countryRightItem">
                        <a id="GNBLocale_en_UK" tabIndex="231">United Kingdom (English)</a>
                    </li>


                    <li className="us countryFlag countryIconLi countryRightItem">
                        <a id="GNBLocale_en_US" tabIndex="232">United States (English)</a>
                    </li>


                    <li className="at countryFlag countryIconLi countryRightItem">
                        <a id="GNBLocale_de_AT" tabIndex="233">Österreich (Deutsch)</a>
                    </li>


                    <li className="ru countryFlag countryIconLi countryRightItem">
                        <a id="GNBLocale_ru_RU" tabIndex="234">Россия (Pусский)</a>
                    </li>


                    <li className="kr countryFlag countryIconLi countryRightItem">
                        <a id="GNBLocale_ko_KR" tabIndex="235">한국 (한국어)</a>
                    </li>


                    <li className="cn countryFlag countryIconLi countryRightItem">
                        <a id="GNBLocale_zh_CN" tabIndex="236">中国 (中文)</a>
                    </li>


                    <li className="jp countryFlag countryIconLi countryRightItem">
                        <a id="GNBLocale_ja_JP" tabIndex="237">日本 (日本語)</a>
                    </li>


                </ul>
            </div>
        </div>

    }
}

export default connect
(
    state => state
)(CountryList)
