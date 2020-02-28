import React from 'react';
import {View, TouchableOpacity, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

const ClearButton = ({text, onPress}) => {
    return (
        <TouchableOpacity style = {styles.container} onPress = {onPress}>
            <View style = {styles.wraper}>
                <Image  resizeMode = 'contain' style = {styles.icon} source = {require('./images/icon.png')}/>
                <Text style = {styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

ClearButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
}

const styles = EStyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 40,
        width: '50%',
        alignSelf: 'center',
    },
    wraper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 19,
        marginRight: 11,
    },
    text: {
        color: '$white',
        fontSize: 14,
    },
});

export default ClearButton;