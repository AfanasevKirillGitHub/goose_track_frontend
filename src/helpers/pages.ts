import { mainNav } from './interfaces/mainNav/mainNav';

export const authPages: mainNav[] = [
  { name: 'Sign up', href: '/registration', id: 1 },
  { name: 'Login', href: '/login', id: 2 },
];

export const accountPages: mainNav[] = [
  { name: 'My account', href: 'account', id: 3 },
  { name: 'Calendar', href: 'calendar', id: 4 },
];
