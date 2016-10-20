import React from "react";
import {connect} from "react-redux";
import NavBar from "./NavBar/navbar";
import Footer from "./Footer/footer";
import Button from "./Button/button.js"


// compiles the SCSS style sheet
require('!style!css!sass!./main.scss');

export default class Main extends React.Component {
    render(){
        return (

            <div className="public gnbV2">
                <NavBar/>
                <div id="publicViews" className="publicViews clearfix">

                    <div className="section" id="section1">
                        <div id="hpconnected" className="section-background image1">
                            <div className="overlay-black">
                                <section className="wrap-content">
                                    <h2 className="title">One Account, Many Services</h2>
                                    <h3 className="subtitle">HP Connected provides access to various HP services with a single account.</h3>

                                    <Button/>

                                </section>
                            </div>

                        </div>
                    </div>

                </div>

              <Footer/>

            </div>
       );
    }
}

//export default connect(
    /**
     * These are "reducers" from the combineReducers call in the reducers/index.js file.
     *
     * These are mapped to the this.props of the Weather object
     *
     * mapStateToProps
     */
//    state => state,

    /**
     * These are actions functions that are mapped to the this.props object
     *
     * mapDispatchToProps
     */
//    dispatch => dispatch
//)(Main)

