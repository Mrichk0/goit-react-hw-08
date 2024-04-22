import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { selectIsLogIn } from '../../../redux/auth/authSelectors';

const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(selectIsLogIn, shallowEqual);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
