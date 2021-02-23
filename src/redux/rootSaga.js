import { all, call } from 'redux-saga/effects';

import userSagas from './User/user.sagas';
import productsSaga from './Products/products.sagas.js';
import orderSagas from './Orders/orders.sagas';

export default function* rootSaga() { 
    yield all([
        call(userSagas),
        call(productsSaga),
        call(orderSagas)
     ])
}