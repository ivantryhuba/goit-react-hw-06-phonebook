import { ADD, REMOVE, CHANGE_FILTER } from './contactsTypes';

const addContact = newContact => ({
  type: ADD,
  payload: newContact,
});

const removeContact = id => ({
  type: REMOVE,
  payload: id,
});

const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});

export default { addContact, removeContact, changeFilter };
