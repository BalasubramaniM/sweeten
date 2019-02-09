import React from "react";
import agent from "../agent";
import { connect } from "react-redux";
import { APP_LOAD } from "../constants/actionTypes";
import Home from "../components/Home";

import "../styles/variables.css";
import "../styles/styles.css";
import "../styles/responsive.css";
import "bootstrap/dist/css/bootstrap.css";

const mapStateToProps = state => {
    return {
        appLoaded: state.common.appLoaded,
        appName: state.common.appName,
        data: state.common.data,
        advertiser: state.common.advertiser,
        timeline: state.common.timeline
    };
};

const mapDispatchToProps = dispatch => ({
    onLoad: payload => dispatch({ type: APP_LOAD, payload, skipTracking: true })
});

class App extends React.Component {
    componentDidMount() {
        this.props.onLoad(agent.Home.all());
    }

    render() {
        return <Home />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
