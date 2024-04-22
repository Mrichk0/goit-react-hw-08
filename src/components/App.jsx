import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../redux/auth/authOperations';
import NavigationRoutes from '../components/PhoneBook/NavigationRoutes';
import s from './app.module.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <NavigationRoutes />
    </div>
  );
};
