import { 
    CHANGE_BASE_CURRENCY, SWAP_CURRENCY, 
    GET_INITIAL_CONVERSION,
    CONVERSION_ERROR,
    CONVERSION_RESULT, 
} from '../actions/currencies';
import { takeEvery, select, call, put } from 'redux-saga/effects';

const getLatestRate = currency => fetch(`http://fixer.handlebarlabs.com/latest?base=${currency}`)

function* fetchLatesConversionRates(action) {
    try {
        let currency = action.currency;
        if (currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency);
        };
        const response = yield call(getLatestRate, currency);
        const result = yield response.json();
        if (result.error) {
            yield put({ type: CONVERSION_ERROR, error: result.error})
        } else {
            yield put({type: CONVERSION_RESULT, result});
        }
    }
    catch (error) {
        yield put({ type: CONVERSION_ERROR, error: error.message})
    }
};

export default function* rootSaga() {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatesConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatesConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatesConversionRates);
};