import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import Currencies from '../data/Currencies';
import {ListItem} from '../components/List';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';


class CurrencyList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispath: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,  
        primariColor: PropTypes.string, 
    }
    handlePress = (currency) => {
        const { navigation, dispatch } = this.props;
        const { type } = navigation.state.params;
        if (type === 'base') {
            dispatch(changeBaseCurrency(currency));
        }
        else if (type === 'quote') {
            dispatch(changeQuoteCurrency(currency));
        }
        return this.props.navigation.goBack(null);
    }
    render () {
        const { baseCurrency, quoteCurrency, navigation } = this.props;
        let comparisonCurrency = baseCurrency;
        if (navigation.state.params.type === 'quote') {
            comparisonCurrency = quoteCurrency;
        }
        return (
            <View>
                <FlatList
                    data = {Currencies}
                    renderItem = {({item}) => 
                        <ListItem
                            text = {item}
                            selected = {item === comparisonCurrency}
                            onPress = {() => this.handlePress(item)}
                            iconBackground = {this.props.color}
                            color = {this.props.color}
                        />
                    }
                    keyExtractor = {(item) => item}
                />
            </View>
        );
    };
};

const mapStatetoProps = (state) => ({
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    color: state.themes.primaryColor,
});

export default connect(mapStatetoProps)(CurrencyList);