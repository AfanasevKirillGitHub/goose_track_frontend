import { lazy } from 'react';
import { Layout } from '../components/Layout/Layout';
import CalendarRedirect from '../pages/CalendarPage/CalendarRedirect';
import { RestrictedRout } from '../components/RestrictedRoute/RestrictedRoute';
import { PrivateRout } from '../components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage').then(module => ({
    ...module,
    default: module.HomePage,
  }))
);

const LoginPage = lazy(() =>
  import('../pages/LoginPage/LoginPage').then(module => ({
    ...module,
    default: module.LoginPage,
  }))
);

const RegisterPage = lazy(() =>
  import('../pages/RegisterPage/RegisterPage').then(module => ({
    ...module,
    default: module.RegisterPage,
  }))
);

const UserPage = lazy(() =>
  import('../pages/UserPage/UserPage').then(module => ({
    ...module,
    default: module.UserPage,
  }))
);

const AccountPage = lazy(() =>
  import('../pages/AccountPage/AccountPage').then(module => ({
    ...module,
    default: module.AccountPage,
  }))
);

const CalendarPage = lazy(() =>
  import('../pages/CalendarPage/CalendarPage').then(module => ({
    ...module,
    default: module.CalendarPage,
  }))
);

const CurrentDayPage = lazy(() =>
  import('../pages/CurrentDayPage/CurrentDayPage').then(module => ({
    ...module,
    default: module.CurrentDayPage,
  }))
);

const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage').then(module => ({
    ...module,
    default: module.NotFoundPage,
  }))
);

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <RestrictedRout
            redirectTo="/user/calendar"
            component={<HomePage />}
          />
        ),
      },
      {
        path: '/login',
        element: (
          <RestrictedRout
            redirectTo="/user/calendar"
            component={<LoginPage />}
          />
        ),
      },
      {
        path: '/registration',
        element: (
          <RestrictedRout
            redirectTo="/user/calendar"
            component={<RegisterPage />}
          />
        ),
      },
      {
        path: 'user',
        element: <PrivateRout redirectTo="/" component={<UserPage />} />,
        children: [
          {
            path: 'account',
            element: <PrivateRout redirectTo="/" component={<AccountPage />} />,
          },
          {
            path: 'calendar',
            element: (
              <PrivateRout redirectTo="/" component={<CalendarRedirect />} />
            ),
            children: [
              {
                path: 'month',
                element: (
                  <PrivateRout redirectTo="/" component={<CalendarPage />} />
                ),
              },
            ],
          },

          {
            path: 'calendar/day/:current',
            element: (
              <PrivateRout redirectTo="/" component={<CurrentDayPage />} />
            ),
          },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
