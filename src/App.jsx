import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

//COMPONENTS
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return contacts ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
  
  useEffect(() => {
    return () => {
      localStorage.removeItem('contacts');
    };
  }, []);

  const addContact = contact => {
    if (isDublicate(contact)) {
      return alert(`${contact.name} - is already in contacts`);
    }
    setContacts(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return [...prev, newContact];
    });
  };

  const removeContact = id => {
    setContacts(prev => {
      const newContact = prev.filter(item => item.id !== id);
      return newContact;
    });
  };

  const onChangeFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const isDublicate = ({ name, number }) => {
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
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
    <Section title={'Task - 2 Contact book'}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h1>Contacts</h1>
      <Filter onChangeFilter={onChangeFilter} filter={filter} />
      {length > 0 ? (
        <ContactList items={filtredContacts} removeContact={removeContact} />
      ) : (
        <p>Contact list is empty.</p>
      )}
    </Section>
  );
}