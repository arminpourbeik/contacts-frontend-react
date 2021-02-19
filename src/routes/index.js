import {
  RegisterContainer,
  LoginContainer,
  ContactsContainer,
  CreateContactContainer,
} from '../containers'

const routes = [
  {
    path: '/create',
    component: CreateContactContainer,
    title: 'Create Contact',
    needsAuth: false,
  },
  {
    path: '/register',
    component: RegisterContainer,
    title: 'Register',
    needsAuth: false,
  },
  {
    path: '/login',
    component: LoginContainer,
    title: 'Login',
    needsAuth: false,
  },
  {
    path: '/',
    component: ContactsContainer,
    title: 'Contacts',
    needsAuth: true,
  },
]

export default routes
