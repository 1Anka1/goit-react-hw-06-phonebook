import { ADD_CONTACTS, REMOVE_CONTACTS, SET_FILTER } from './types';

const initialState = {
  contacts: [],
  filter: '',
};

export const reducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACTS:
      const newContact = [...store.contacts, payload];
      return { ...store, contacts: newContact };

    case REMOVE_CONTACTS:
      const result = store.contacts.filter(item => item.id !== payload);
      return { ...store, contacts: result };

    case SET_FILTER:
      return { ...store, filter: payload };
    default:
      return store;
  }
};
