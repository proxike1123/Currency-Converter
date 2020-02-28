import React, { Component } from 'react';
import {ScrollView, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {changePrimaryColor} from '../actions/themes';
import {ListItem} from '../components/List';

class Themes extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
    }
    handleThemesPress = (color) => {
        this.props.dispatch(changePrimaryColor(color))
        this.props.navigation.navigate('home');
    };
    render () {
        return (
            <ScrollView style = {{backgroundColor: '#FFFFFF'}}>
                <StatusBar translucent = {false} barStyle = 'default'/>
                <ListItem
                    text = 'Blue'
                    onPress = {() => this.handleThemesPress(styles.$blue)}
                    checkmark = {false}
                    selected
                    iconBackground = {styles.$blue}
                    color = {styles.$blue}
                />
                  <ListItem
                    text = 'Orange'
                    onPress = {() => this.handleThemesPress(styles.$orange)}
                    checkmark = {false}
                    selected
                    iconBackground = {styles.$orange}
                    color = {styles.$orange}
                />
                  <ListItem
                    text = 'Green'
                    onPress = {() => this.handleThemesPress(styles.$green)}
                    checkmark = {false}
                    selected
                    iconBackground = {styles.$green}
                    color = {styles.$green}
                />
                  <ListItem
                    text = 'Purple'
                    onPress = {() => this.handleThemesPress(styles.$purple)}
                    checkmark = {false}
                    selected
                    iconBackground = {styles.$purple}
                    color = {styles.$purple}
                />
            </ScrollView>
        );
    };
};

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
});

const mapStatetoProps = (state) => ({
    color: state.themes.primaryColor,
});

export default connect(mapStatetoProps)(Themes);