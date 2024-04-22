import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/operations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const NavbarUser = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  return (
    <div style={styles.container}>
      <span style={styles.name}> welcome: {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        exit
      </button>
    </div>
  );
};

export default NavbarUser;
