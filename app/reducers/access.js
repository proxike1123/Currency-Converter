import { CHECKING_ACCESS } from '../actions/access';

const initialState = {
    key: [
        {
            user: 'ADMIN',
            password: '123'
        },
        {
            user: 'GUEST',
            password: '456',
        },
        {
            user: 'VIP',
            password: '789',
        }
    ],
};

export default ( state = initialState, action) => {
    switch (action.type) {
        case CHECKING_ACCESS: 
            return {
                ...state,
            }
        default: 
            return state;
    }
}