
import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {deliveryReducer} from './deliveryReducer';

export default createStore(
    combineReducers({
        form: formReducer,
        delivery: deliveryReducer
    })
);

