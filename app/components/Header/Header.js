import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

const Header = ({onPress}) => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.button} onPress = {onPress}>
                <Image 
                    source = {require('./images/gear.png')}
                    style = {styles.icon}
                    resizeMode = 'contain'
                />
            </TouchableOpacity>
         </View>
    );
};

Header.propTypes = {
    onPress: PropTypes.func,
}

const styles = EStyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        alignItems: 'flex-end',
    },
    icon: {
        width: 25,
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 20,
    }
});

export default Header;