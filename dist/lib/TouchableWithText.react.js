/**
*   TouchableWithText.react.js
*   Copyright 2016 J&P Innovations Inc.
*/

import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from "react-native"
import PropTypes from 'prop-types';
import React from 'react';

class TouchableWithText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPressed: false
        };

        this.handlePressIn = this.handlePressIn.bind(this);
        this.handlePressOut = this.handlePressOut.bind(this);
        this.getBtnStyles = this.getBtnStyles.bind(this);

    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress} onPressIn={this.handlePressIn} onPressOut={this.handlePressOut} >
                <View style={this.getBtnStyles()}>
                    <Text style={this.props.textStyle}>{this.props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    getBtnStyles() {
        let styles = this.props.staticStyles;
        let activeStyles = (this.state.isPressed) ? this.props.pressedStyles : this.props.normalStyles;
        return Object.assign({}, styles, activeStyles);

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
}

TouchableWithText.propTypes = {
    onPress         : PropTypes.func.isRequired,
    text            : PropTypes.string.isRequired,
    textStyle       : PropTypes.object.isRequired,
    staticStyles    : PropTypes.object.isRequired,
    pressedStyles   : PropTypes.object.isRequired,
    normalStyles    : PropTypes.object.isRequired
}

export default TouchableWithText;