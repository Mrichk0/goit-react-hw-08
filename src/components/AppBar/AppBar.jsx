import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import Navigation from '../../components/Navigation';
import AuthNav from '../../components/AuthNav';
import NavbarMenu from '../../components/NavbarMenu';
import NavbarUser from '../../components/NavbarUser';
import Loader from '../../shared/components/Loader/Loader';

import { selectIsLogIn } from '../../redux/auth/authSelectors';

import styles from '../AppBar/app.module.css';
const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLogIn);
  return (
    <>
      <header className={styles.header}>
        <Navigation />
        {isLoggedIn && <NavbarMenu />}
        {isLoggedIn ? <NavbarUser /> : <AuthNav />}
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default AppBar;
