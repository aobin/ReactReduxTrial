import React from "react";
import { connect } from 'react-redux'

import { routeActions, push } from 'react-router-redux';

export default class Button extends React.Component {


    render(){



        return (

            <button type="button" className="getStarted button-blue-bkg" data-reveal-id="signUp"  onClick={() => dispatch(routeActions.push('/navbar'))} tabIndex="500" ><span className="screen-reader-text">Access various HP services with a single account, </span>Create your <span className="screen-reader-text">HP Connected</span> account</button>
        )


    }
}

