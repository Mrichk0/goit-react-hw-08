import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { selectIsLogIn } from '../../../redux/auth/authSelectors';

const PublicRoute = () => {
  const isLoggedIn = useSelector(selectIsLogIn, shallowEqual);
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
