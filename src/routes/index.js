import {
  RegisterContainer,
  LoginContainer,
  ContactsContainer,
  CreateContactContainer,
} from '../containers'

const routes = [
  {
    path: '/register',
    component: RegisterContainer,
    title: 'Register',
  },
  {
    path: '/login',
    component: LoginContainer,
    title: 'Login',
  },
  {
    path: '/',
    component: ContactsContainer,
    title: 'Contacts',
  },
  {
    path: '/create',
    component: CreateContactContainer,
    title: 'Create Contact',
  },
]

export default routes
