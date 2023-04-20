import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { IRoutsProps } from '../../helpers/interfaces/routs/routs';

export const RestrictedRout = ({
  component: Component,
  redirectTo = '/account',
}: IRoutsProps) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};
