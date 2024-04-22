import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../Navigation/navigation.module.css';
const Navigation = () => (
  <nav>
    <NavLink to="/" className={styles.link}>
      main
    </NavLink>
  </nav>
);

export default Navigation;
