import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { IRoutsProps } from '../../helpers/interfaces/routs/routs';

export const PrivateRout = ({
  component: Component,
  redirectTo = '/',
}: IRoutsProps) => {
  const { isLoggedIn, isRefreshing, token } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing && !token;
  console.log(shouldRedirect);
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : Component;
};
