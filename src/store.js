import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { deliveryReducer } from './deliveryReducer';

const reducer = combineReducers({
  form: formReducer // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
