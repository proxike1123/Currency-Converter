import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import styles from './styles';
import Color from 'color';

const InputWithButton = (props) => {
    const {onPress, buttonText, editable = true } = props;
    const containerStyles = [styles.container];
    const underlayColor = Color(styles.$buttonBackgroundColorBase).darken(
        styles.$buttonBackgroundColorModifier,
    );
    const buttonTextStyle = [styles.buttonText]
    const inputStyle = [styles.input]
    if (editable === false) {
        containerStyles.push(styles.containerDisabled)
    }
    if (props.textColor) {
        buttonTextStyle.push({color: props.textColor})
    }
    if (props.textColor) {
        inputStyle.push({color: props.textColor})
    }
    return (
        <View style = {containerStyles}>
            <TouchableHighlight 
                onPress = {onPress}
                underlayColor = {underlayColor}
                style = {styles.buttonContainer}
                >
                <Text style = {buttonTextStyle}>{buttonText}</Text>
            </TouchableHighlight>
            <View style = {styles.boder}/>
            <TextInput 
                style = {inputStyle} 
                {...props} 
                underlineColorAndroid = 'transparent'
            />
        </View>
    );
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
    textColor: PropTypes.string,
};

export default InputWithButton;