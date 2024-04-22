import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';

import ContactForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './SearchBox';

import { useEffect } from 'react';

import { selectIsLoading, selectError } from '../../redux/selectors';

import styles from './phoneBook.module.css';
const PhoneBook = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>...loading</p>}
      <ContactList />
    </div>
  );
};

export default PhoneBook;
