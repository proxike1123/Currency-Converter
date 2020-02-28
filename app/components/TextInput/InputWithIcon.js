import React from 'react';
import {View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const InputWithIcon = ({icon, placeholder, color, changeText, ...props}) => {
    const iconStyle = [styles.iconContainer];
    const inputStyle = [styles.input];
    if (color) {
        iconStyle.push({borderColor: color});
        inputStyle.push({color: color});
    }
    return (
        <View style = {styles.container}>
            <View style = {iconStyle}>
                <Icon
                    name = {icon}
                    color = {color}
                    size = {40}
                    style = {styles.icon}
                />
            </View>
            <TextInput
                style = {inputStyle}
                placeholder = {placeholder}
                placeholderTextColor = {color}
                onChangeText = {changeText}
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 48,
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: 20,
    },
    iconContainer: {
        alignItems: 'center',
        width: '15%',
        borderRightWidth: StyleSheet.hairlineWidth,
        marginLeft: 5,
    },
    icon: {
        height: 48,
    },
    input: {
        width: '75%',
        fontSize: 18,
        paddingLeft: 15,
    },
});

InputWithIcon.propTypes = {
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    color: PropTypes.string,
    changeText: PropTypes.func,
}

export default InputWithIcon;