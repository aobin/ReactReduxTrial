import React from "react";
import {
    ButtonGroup,
    Icon
} from 'react-foundation';
import { Link } from 'react-router';

import Countries from "../Countries/countries"

export default class NavBar extends React.Component {
    render(){
        const isAuthenticated = 'true';
        return (


            <div id="gnbCombinedNavBars" className="gnbV2  gnbPosition modern">


                <header id="publicTopNav" className="hpcGlobalNavBar publicContent gnbV2">
                    <nav className="nav-top-bar gnbV2" role="navigation">
                        <div className="top-bar-options">
                            <ul className="options-left">
                                <li className="name">
                                    <h1 className="hp-brand" id="hpcLogo" tabIndex="200">
                                        <img src="https://www.hpconnected.com/public/images/hplogo.png" alt="HP connected"/> Connected
                                    </h1>
                                </li>
                            </ul>

                            <ul className="options-right">
                                <li id="gnbCountrySelectorId" className="has-dropdown countryFlag us">
                                    <a>
                                        <span className="countrySelectorIcon"></span>
                                        <span name="gnbCountrySelector" id="gnbSelectCountry" tabIndex="210" data-ele-id="countrySelector" className="hide-small select_country">
					United States (English)
					</span>
                                        <span className="countrySelectorDropdownIcon"></span>
                                    </a>

                                    <div className="countrySelector list">
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



                                                <li className="nz countryFlag countryIconLi countryRightItem" >
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



                                                <li className="se countryFlag countryIconLi countryRightItem" >
                                                    <a id="GNBLocale_sv_SE" tabIndex="230">Sverige (Svenska)</a>
                                                </li>



                                                <li className="uk countryFlag countryIconLi countryRightItem">
                                                    <a id="GNBLocale_en_UK" tabIndex="231">United Kingdom (English)</a>
                                                </li>



                                                <li className="us countryFlag countryIconLi countryRightItem" >
                                                    <a id="GNBLocale_en_US" tabIndex="232">United States (English)</a>
                                                </li>



                                                <li className="at countryFlag countryIconLi countryRightItem" >
                                                    <a id="GNBLocale_de_AT" tabIndex="233">Österreich (Deutsch)</a>
                                                </li>



                                                <li className="ru countryFlag countryIconLi countryRightItem">
                                                    <a id="GNBLocale_ru_RU" tabIndex="234">Россия (Pусский)</a>
                                                </li>



                                                <li className="kr countryFlag countryIconLi countryRightItem">
                                                    <a id="GNBLocale_ko_KR" tabIndex="235">한국 (한국어)</a>
                                                </li>



                                                <li className="cn countryFlag countryIconLi countryRightItem" >
                                                    <a id="GNBLocale_zh_CN" tabIndex="236">中国 (中文)</a>
                                                </li>



                                                <li className="jp countryFlag countryIconLi countryRightItem">
                                                    <a id="GNBLocale_ja_JP" tabIndex="237">日本 (日本語)</a>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="signInLink blue-link"><a id="login" className="menuLabel" title="Sign In" tabIndex="299">Sign In</a><div id="webauthPanel" className="hpcGlobalNavBar webauthPanel gnb hide">

                                    <iframe id="webauthPanelIFrame" className="webauthPanelIFrame" src="" frameBorder="0" scrolling="no" ></iframe>

                                </div></li>

                            </ul>

                        </div>
                    </nav>





                </header>







            </div>

            



        );
    }
}