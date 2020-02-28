import React, { Component } from 'react';
import {ScrollView, StatusBar, Platform, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import {ListItem} from '../components/List';
import {connectAlert} from '../components/Alert';
import { connect } from 'react-redux';

const OS = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_SIZE = 23;

class Options extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        alertWithType: PropTypes.func,
    };
    handleThemesPress = () => {
        return this.props.navigation.navigate('theme', {color: this.props.color});
    };
    handleSitePress = () => {
        Linking.openURL('http://fixer.io').catch(() => 
            this.props.alertWithType('error', 'Sorry!', "Fixer.io can't be opened right now"));
    };
    handleLogout = () => {
        this.props.navigation.navigate('Login');
    };
    render () {
        return (
            <ScrollView style = {{backgroundColor: '#FFFFFF'}}>
                <StatusBar translucent = {false} barStyle = 'default'/>
                <ListItem
                    text = 'Themes'
                    onPress = {this.handleThemesPress}
                    customIcon = {
                        <Icon name = {`${OS}-arrow-forward`} size = {ICON_SIZE} color = {this.props.color}/>
                    }
                    color = {this.props.color}
                />
                <ListItem
                    text = 'Fixer.io'
                    onPress = {this.handleSitePress}
                    customIcon = {
                        <Icon name = {`${OS}-link`} size = {ICON_SIZE} color = {this.props.color}/>
                    }
                    color = {this.props.color}
                />
                <ListItem
                    text = 'Log out'
                    onPress = {this.handleLogout}
                    customIcon = {
                        <Icon name = {`${OS}-log-out`} size = {ICON_SIZE} color = {this.props.color}/>
                    }
                    color = {this.props.color}
                />
            </ScrollView>
        );
    };
};

const mapStateToProps = state => ({
    color: state.themes.primaryColor,
});

export default connect (mapStateToProps) (connectAlert(Options));