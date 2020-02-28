import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from './Icon';

const ListItem = ({
    text, 
    onPress, 
    selected = false, 
    checkmark = true, 
    visible = true, 
    customIcon = null,
    iconBackground,
    color,
    colorBorder,
}) => {
    const textStyle = [styles.text];
    const rowStyle = [styles.row];
    if (color) {
        textStyle.push({color: color});
    }
    if (colorBorder) {
        rowStyle.push({borderColor: colorBorder});
    }
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress = {onPress} underlayColor = {styles.$underlayColor}>
            <View style = {rowStyle}>
                <Text style = {textStyle}>{text}</Text>
                {selected? <Icon checkmark = {checkmark} visible = {visible} iconBackground = {iconBackground}/> : null}
                {customIcon}
            </View>
            </TouchableOpacity>
        </View>
    );
};

ListItem.propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
    onPress: PropTypes.func,
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    customIcon: PropTypes.element,
    iconBackground: PropTypes.string,
    color: PropTypes.string,
    colorBorder: PropTypes.string,
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 6,
        backgroundColor: '#FFFFFF',
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0.7,
        borderColor: '#E2E2E2',
    },
    text: {
        fontSize: 16,
    },
});

export default ListItem;