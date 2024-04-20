import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, changeFilter }) => {
  return (
    <div>
      <label htmlFor="">Find contact by name</label> <br />
      <input
        onChange={changeFilter}
        value={filter}
        type="text"
        name="filter"
        className={styles.input}
      />
    </div>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
