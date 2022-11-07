import { useSelector, useDispatch } from 'react-redux';

//REDUX
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';
import { addContact, removeContact } from 'redux/contacts/slice';
import { setFilter } from 'redux/filter/slice'

//COMPONENTS
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export default function Contacts() {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  
  const isDublicate = ({ name, number }) => {
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
  };

  const onAddContact = contact => {
    if (isDublicate(contact)) {
      return alert(`${contact.name} - is already in contacts`);
    }
    const action = addContact(contact);
    dispatch(action);
  };

  const onRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action)
  };

  const onChangeFilter = e => {
    const { value } = e.target;
    dispatch(setFilter(value))
  };

  const getFiltredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalisedFilter = filter.toLocaleLowerCase();
    const filtredContacts = contacts.filter(({ name }) => {
      const normalisedName = name.toLocaleLowerCase();
      const result = normalisedName.includes(normalisedFilter);
      return result;
    });
    return filtredContacts;
  };
  const filtredContacts = getFiltredContacts();
  const length = contacts.length;

  return (
    <>
      <ContactForm onSubmit={onAddContact} />
      <Filter onChangeFilter={onChangeFilter} filter={filter} />
      {length > 0 ? (
        <ContactList items={filtredContacts} removeContact={onRemoveContact} />
      ) : (
        <p>Contact list is empty.</p>
      )}
    </>
  );
}