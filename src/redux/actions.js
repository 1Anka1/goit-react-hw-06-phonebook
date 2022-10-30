import { nanoid } from 'nanoid';
import { ADD_CONTACTS, REMOVE_CONTACTS, SET_FILTER } from './types';

export const addContact = payload => {
  return {
    type: ADD_CONTACTS,
    payload: { id: nanoid(), ...payload },
  };
};
export const removeContact = payload => {
  return {
    type: REMOVE_CONTACTS,
    payload,
  };
};
export const filtredContacts = payload => {
  return {
    type: SET_FILTER,
    payload,
  };
};
