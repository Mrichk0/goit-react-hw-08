import { useSelector } from 'react-redux';

import styles from './phoneBook.module.css';

import ContactForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './SearchBox';

import { selectIsLoading, selectError } from '../../redux/selectors';

const PhoneBook = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
