import styles from './SearchBox.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from '../../../redux/filter/filtersSlice';
import { selectFilter } from '../../../redux/selectors';
const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

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

export default Filter;
