import {combineReducers} from 'redux';

import currencies from './currencies';
import themes from './themes';
import access from './access';

export default combineReducers({
    currencies,
    themes,
    access,
});