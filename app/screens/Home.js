import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import {Logo} from '../components/Logo';
import {connect} from 'react-redux';

import { connectAlert } from '../components/Alert';
import {Container} from '../components/Container';
import {InputWithButton} from '../components/TextInput'
import ClearButton from '../components/Button'
import LastConverted from '../components/Text';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import {swapCurrency, changeCurrencyAmount, getInitialConversion} from '../actions/currencies';


class Home extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        conversionRate: PropTypes.number,
        isFetching: PropTypes.bool,
        lastConvertedDate: PropTypes.object,
        alertWithType: PropTypes.func,
        currencyError: PropTypes.string,
    }

    UNSAFE_componentWillMount () {
        this.props.dispatch(getInitialConversion());
    }

    UNSAFE_componentWillReceiveProps (nextProps) {
        const { currencyError, alertWithType } = this.props;
        if (nextProps.currencyError && !currencyError) {
            alertWithType('error', 'Error', nextProps.currencyError);
        }
    }

    handlePressBaseCurrency = () => {
        return this.props.navigation.navigate('List', {title: 'Base Currency',
        type: 'base', color: this.props.color});
    }
    handlePressQuoteCurrency = () => {
        return this.props.navigation.navigate('List', {title: 'Quote Currency',
        type: 'quote', color: this.props.color});
    }
    handleTextChange =(amount) => {
        this.props.dispatch(changeCurrencyAmount(amount));
    };
    handleSwapCurrency = () => {
        this.props.dispatch(swapCurrency());
    };
    handleOptionPress = () => {
        return this.props.navigation.navigate('option', {color: this.props.color});
    }
    render () {
        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
        if (this.props.baseCurrency === this.props.quoteCurrency) {
            quotePrice = (this.props.amount).toFixed(2);
        }
        if (this.props.isFetching) {
            quotePrice = '...'
        }
        return (
            <Container background = {this.props.color}>
                <StatusBar translucent = {false} barStyle = 'light-content'/>
                <Header onPress = {this.handleOptionPress}/>
                <KeyboardAvoidingView behavior>
                    <Logo tintColor = {this.props.color}/>
                    <InputWithButton 
                        buttonText = {this.props.baseCurrency}
                        onPress = {this.handlePressBaseCurrency}
                        defaultValue = {this.props.amount.toString()}
                        keyboardType = 'numeric'
                        onChangeText = {this.handleTextChange}
                        textColor = {this.props.color}    
                    />
                    <InputWithButton 
                        buttonText = {this.props.quoteCurrency} 
                        onPress = {this.handlePressQuoteCurrency}
                        editable = {false}
                        defaultValue = {quotePrice}
                        textColor = {this.props.color}    
                    />
                    <LastConverted
                        base = {this.props.baseCurrency}
                        quote = {this.props.quoteCurrency}
                        date = {this.props.lastConvertedDate}
                        conversionRate = {this.props.conversionRate}
                    />
                    <ClearButton
                        text = 'Reserve Currencies'
                        onPress = {this.handleSwapCurrency}
                    />
                </KeyboardAvoidingView>
            </Container>    
         );
    }
}

const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};
    return {
        baseCurrency,   
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
        color: state.themes.primaryColor,
        currencyError: state.currencies.error,
    };
};

export default connect(mapStateToProps)(connectAlert(Home));