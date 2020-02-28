import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Container = ({ children , background}) => (
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
        <View style = { [styles.container, {backgroundColor: background}]}>
            {children}
        </View>
    </TouchableWithoutFeedback>
);

Container.propTypes = {
    children: PropTypes.any, 
    background: PropTypes.string,
};

export default Container;