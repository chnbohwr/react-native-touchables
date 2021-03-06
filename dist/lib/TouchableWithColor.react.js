/**
*   TouchableWithColor.js
*   Written By: Derek Johnston
*/

"use strict";

import {
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from "react-native";
import PropTypes from 'prop-types';
import React from 'react';

class TouchableWithColor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPressed: false
        };

        this.handlePressIn = this.handlePressIn.bind(this);
        this.handlePressOut = this.handlePressOut.bind(this);
        this.getStylesForTouchable = this.getStylesForTouchable.bind(this);
    }

    render() {
        return(
            <TouchableWithoutFeedback onPress={this.props.onPress} onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
                <View style={this.getStylesForTouchable()}></View>
            </TouchableWithoutFeedback>
        );
    }

    handlePressIn() {
        this.setState({
            isPressed: true
        });
    }

    handlePressOut() {
        this.setState({
            isPressed: false
        });
    }

    getStylesForTouchable() {
        // Get the rest of the props from the parent component.
        const  staticStyles = this.props.style;
        // Set the background color based on the pressed state of the component.
        const dynamicStyles = {
            backgroundColor: (this.state.isPressed) ? this.props.pressedColor : this.props.normalColor
        }
        // Return the style rules.
        return Object.assign({}, staticStyles, dynamicStyles);
    }
}

TouchableWithColor.propTypes = {
    style           : PropTypes.object.isRequired,
    onPress         : PropTypes.func.isRequired,
    normalColor     : PropTypes.string.isRequired,
    pressedColor    : PropTypes.string.isRequired
}

export default TouchableWithColor
