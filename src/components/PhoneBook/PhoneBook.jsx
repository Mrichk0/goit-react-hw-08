import { useSelector, useDispatch } from 'react-redux';

import { addContact, deleteContact } from '../../redux/contactsOps';

import styles from './phoneBook.module.css';

import { setFilter } from '../../redux/filter/filtersSlice';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
} from '../../redux/selectors';

const PhoneBook = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const addNewContact = data => {
    const isDuplicated = contacts
      ? contacts.find(contact => contact.name === data.name)
      : false;

    if (isDuplicated) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    dispatch(addContact(data));
  };

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={changeFilter} />
      {isLoading && !error && <p>...loading</p>}
      <ContactList removeContact={removeContact} />
    </div>
  );
};

export default PhoneBook;
