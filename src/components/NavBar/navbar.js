import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import CountryList from "../../CountryList/CountryList";
import {showCountryList,hideCountryList} from "../../actions/CountryListAction";

export class NavBar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.showCountry = this.showCountry.bind(this);
    }

    showCountry(event)
    {
        event.preventDefault();
        var src = event.target || window.event.srcElement;
        console.log("event src" );
        console.log(src);
        console.log("src class name" );
        console.log(src.className);
        console.log("data-country" );
        console.log(src.getAttribute("data-country"));

        const {countryList} = this.props;
        console.log("countryList from NavBar props:" );
        console.log(countryList);
        console.log("try to dispatch a showCountryList ation from NavBar showCountry Method by using props.showCountryList: ");
        if(countryList.display=="none")
        {
            this.props.showCountryList();
        }else
        {
            this.props.hideCountryList();
        }

    }

    render()
    {
        const isAuthenticated = 'true';

        return <div id="gnbCombinedNavBars" className="gnbV2  gnbPosition modern">
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
                                        <span className="countrySelectorIcon" data-country="us" onClick={this.showCountry}></span>
                                        <span name="gnbCountrySelector" id="gnbSelectCountry" tabIndex="210" data-ele-id="countrySelector" className="hide-small select_country">
					                        United States (English)
					                    </span>
                                        <span className="countrySelectorDropdownIcon"></span>
                                    </a>
                                    <CountryList/>
                                </li>
                                <li className="signInLink blue-link">
                                    <a id="login" className="menuLabel" title="Sign In" tabIndex="299">SignIn</a>
                                    <div id="webauthPanel" className="hpcGlobalNavBar webauthPanel gnb hide">
                                    <iframe id="webauthPanelIFrame" className="webauthPanelIFrame" src="" frameBorder="0" scrolling="no"></iframe>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </header>
            </div>
    }
}

export default connect
(
    state => state,
    dispatch => bindActionCreators
    (
        {
        ...{showCountryList,hideCountryList},
        },
        dispatch
    )
)(NavBar)
