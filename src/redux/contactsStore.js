import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contactsReducer';

const rootReducer = combineReducers({
  contactList: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
