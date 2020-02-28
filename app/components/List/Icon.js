import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
const Icon = ({checkmark, visible, iconBackground}) => {
    const iconStyles = [styles.icon];
    if (visible) {
        iconStyles.push(styles.iconVisible);
    }
    if (iconBackground) {
        iconStyles.push({backgroundColor: iconBackground})
    }
    return (
        <View style = {iconStyles}>
            {checkmark ? <Image style = {styles.checkIcon} source = {require('./images/check.png')}/> : null}
        </View>
    );
};

Icon.propTypes = {
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    iconBackground: PropTypes.string,
};

const styles = StyleSheet.create({
    icon: {
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconVisible: {
        backgroundColor: '#4F6D7A',
    },
    checkIcon: {
        width: 18,
        resizeMode: 'contain',
    }
});

export default Icon;