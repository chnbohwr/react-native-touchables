/**
*   TouchableWithImage.react.js
*   Written By: Derek Johnston
*/

"use strict";

import {
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import PropTypes from 'prop-types';
import React from 'react';

class TouchableWithImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPressed: false
        }

        this.handlePressIn = this.handlePressIn.bind(this);
        this.handlePressOut = this.handlePressOut.bind(this);
        this.getBtnImg = this.getBtnImg.bind(this);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress} onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
                <View style={this.props.imageContainerStyle}>
                    <Image source={this.getBtnImg()} resizeMode="stretch"></Image>
                </View>
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

    getBtnImg() {
        return (this.state.isPressed) ? this.props.pressedImg : this.props.normalImg;
    }
}

TouchableWithImage.propTypes = {
    onPress             : PropTypes.func.isRequired,
    imageContainerStyle : PropTypes.object.isRequired,
    pressedImg          : PropTypes.number.isRequired,
    normalImg           : PropTypes.number.isRequired
}

export default TouchableWithImage
