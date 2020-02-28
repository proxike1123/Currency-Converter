import React, { Component } from 'react';
import {View, StyleSheet, TouchableOpacity, Text, ToastAndroid} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from '../../components/Container';
import {Logo} from '../../components/Logo';
import { InputWithIcon } from '../../components/TextInput';
import {checkingAccess} from '../../actions/access';

class LoginScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputUserName: '',
            inputPassWord: '',
        }
    }
    static propTypes = {
        dispatch: PropTypes.func,
        color: PropTypes.string,
        navigation: PropTypes.object,
        access: PropTypes.array,
    }
    handleLogin = () => {
        this.props.dispatch(checkingAccess());
        let check = false;
        const key = this.props.access;
        for (let i = 0; i < key.length; i++) {
            if (this.state.inputUserName === key[i].user && 
                this.state.inputPassWord === key[i].password) {check = true;};         
        };
        if (check) {
            this.setState({inputPassWord: ''});
            this.setState({inputUserName: ''});
            this.props.navigation.navigate('Home');
        }
        else {
            ToastAndroid.show('Wrong username or password', ToastAndroid.SHORT);
        }
    };
    render () {
        return (
            <Container background = {this.props.color}>
                <View style = {styles.container}>
                    <Logo tintColor = {this.props.color}></Logo>
                    <InputWithIcon 
                        icon = 'md-person'
                        placeholder = 'Username'
                        color = {this.props.color}
                        changeText = {(text) => this.setState({inputUserName: text})}
                        value = {this.state.inputUserName}
                    />
                    <InputWithIcon 
                        icon = 'md-lock'
                        placeholder = 'Password'
                        color = {this.props.color}
                        changeText = {(text) => this.setState({inputPassWord: text})}
                        secureTextEntry={true}
                        value = {this.state.inputPassWord}
                    />
                    <TouchableOpacity 
                        style = {styles.button}
                        onPress = {this.handleLogin}
                        >
                        <Text 
                            style = {[styles.buttonText, {color: this.props.color}]}>Login</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 30,
        backgroundColor: '#FFFFFF',
        height: 40,
        width: '50%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    }
}); 

const mapStatetoProps = (state) => {
    return {
        color: state.themes.primaryColor,
        access: state.access.key,
    };
};

export default connect (mapStatetoProps) (LoginScreen);