import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

export const Router = () => {
  const result = useRoutes(routes);

  return result;
};
