import PropTypes from 'prop-types';

import styles from './contactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../../redux/selectors';

const ContactList = ({ removeContact }) => {
  const contacts = useSelector(selectFilteredContacts);
  const elements = contacts.map(({ id, name, number }) => (
    <li className={styles.list} key={id}>
      {name}: {number}
      <button className={styles.btn} onClick={() => removeContact(id)}>
        Delete
      </button>
    </li>
  ));
  return <ul>{elements}</ul>;
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
