import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

const LastConverted = ({base, date, quote, conversionRate}) => {
    if (base === quote) {conversionRate = 1}
    return (
        <Text style = {styles.smallText}>
            1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
        </Text>
    );
};

LastConverted.propTpes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number,
}

const styles = EStyleSheet.create({
    smallText: {
        color: '$white',
        textAlign: 'center',
        fontSize: 12,
    }
});

export default LastConverted;