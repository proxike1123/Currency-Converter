import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, Keyboard, Platform, Animated } from 'react-native';
import PropTypeps from 'prop-types';
import styles from './styles';

const ANIMATION_DURATION = 250;
class Logo extends Component {
    static proppTypes = {
        tintColor: PropTypeps.string,
    }
    constructor (props) {
        super (props);
        this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
        this.imagewidth = new Animated.Value(styles.$largeImageSize)
    }
    componentDidMount () {
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.KeyboardShowListener = Keyboard.addListener(`keyboard${name}Show`, this.keyboardShow);
        this.KeyboardHideListener = Keyboard.addListener(`keyboard${name}Hide`, this.keyboardHide);
    };

    componentWillUnmount () {
        this.KeyboardShowListener.remove();
        this.KeyboardHideListener.remove();
    };

    keyboardShow = () => {
        // Animated.timing(this.containerImageWidth, {
        //     toValue: styles.$smallContainerSize,
        //     duration: ANIMATION_DURATION,
        // }).start(); 
        // Animated.timing(this.imagewidth, {
        //     toValue: styles.$smallImageSize,
        //     duration: ANIMATION_DURATION,
        // }).start(); 
        Animated.parallel([
            Animated.timing(this.containerImageWidth, {
                toValue: styles.$smallContainerSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(this.imagewidth, {
                toValue: styles.$smallImageSize,
                duration: ANIMATION_DURATION,
            })
        ]).start();
    };

    keyboardHide = () => {
       Animated.parallel([
            Animated.timing(this.imagewidth, {
                toValue: styles.$largeImageSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(this.containerImageWidth, {
                toValue: styles.$largeContainerSize,
                duration: ANIMATION_DURATION,
            }) 
       ]).start();
    };

    render () {
        const containerImageStyle = [
                styles.imageContainer,
                {width: this.containerImageWidth, height: this.containerImageWidth},
        ];
        const imageStyle = [
            styles.image,
            {width: this.imagewidth},
            this.props.tintColor ? { tintColor: this.props.tintColor } : null,
        ];
        return (
            <View style = {styles.container}>
                <Animated.View style = {containerImageStyle}>
                    <Animated.Image 
                        resizeMode = 'contain'
                        style = {containerImageStyle}
                        source = {require('./images/background.png')}
                    />
                    <Animated.Image 
                        source = { require('./images/logo.png')}
                        style = {imageStyle}
                        resizeMode = 'contain'
                        />
                </Animated.View>
                <Text style = {styles.text}>Currency Converter</Text>
            </View>
        );
    }
}

export default Logo;