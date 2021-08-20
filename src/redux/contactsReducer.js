import { combineReducers } from 'redux';
import { ADD, REMOVE, CHANGE_FILTER } from './contactsTypes';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case REMOVE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ contacts, filter });
