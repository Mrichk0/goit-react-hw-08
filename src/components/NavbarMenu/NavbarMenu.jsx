import { NavLink } from 'react-router-dom';

import styles from '../NavbarMenu/navBar.module.css';
const NavbarMenu = () => {
  return (
    <NavLink to="/contacts" className={styles.link}>
      contacts
    </NavLink>
  );
};

export default NavbarMenu;
