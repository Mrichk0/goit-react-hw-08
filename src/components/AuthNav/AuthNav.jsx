import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../AuthNav/authNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink className={styles.link} to="/register">
        registration
      </NavLink>
      <NavLink className={styles.link} to="/login">
        login
      </NavLink>
    </div>
  );
};

export default AuthNav;
