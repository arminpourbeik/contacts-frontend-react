import { useContext } from 'react'

import { Link, useLocation, useHistory } from 'react-router-dom'
import { Button, Icon, Menu } from 'semantic-ui-react'

import { GlobalContext } from '../context/Provider'
import logout from '../context/actions/auth/logout'
import logo from '../assets/images/logo.svg'
import { isAuthenticated } from '../utils/isAuthenticated'

function Header() {
  const { pathname } = useLocation()
  const history = useHistory()

  // Global Context
  const { contactDispatch } = useContext(GlobalContext)

  function handleLogout() {
    logout(history)(contactDispatch)
  }

  return (
    <Menu secondary pointing size='large'>
      <Menu.Item as={Link} to='/'>
        <img src={logo} alt='logo' />
      </Menu.Item>

      {isAuthenticated() && (
        <>
          <Menu.Item name='logout' onClick={handleLogout} position='right'>
            <Button color='red' basic icon>
              <Icon name='log out'></Icon> Logout
            </Button>
          </Menu.Item>
          <Menu.Item name='create'>
            <Button as={Link} to='/create' primary basic icon>
              <Icon name='add'></Icon> Create
            </Button>
          </Menu.Item>
        </>
      )}

      {!pathname === '/' && (
        <>
          <Menu.Item name='login'>
            <Button as={Link} to='/login' color='red' basic icon>
              <Icon name='sign in'></Icon> login
            </Button>
          </Menu.Item>

          <Menu.Item name='register'>
            <Button as={Link} to='/register' color='green' basic icon>
              <Icon name='signup'></Icon> Register
            </Button>
          </Menu.Item>
        </>
      )}
    </Menu>
  )
}

export default Header
