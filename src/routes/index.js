import RegisterContainer from '../containers/Register'
import LoginContainer from '../containers/Login'
import ContactsContainer from '../containers/Contacts'
import CreateContactContainer from '../containers/CreateContact'

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
