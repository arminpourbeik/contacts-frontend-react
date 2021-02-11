import { Link } from 'react-router-dom'

// Semantic UI
import { Button, Icon, Menu } from 'semantic-ui-react'

import logo from '../assets/images/logo.svg'

function Header() {
  return (
    <Menu secondary pointing size='large'>
      <Menu.Item as={Link} to='/'>
        <img src={logo} alt='logo' />
      </Menu.Item>
      <Menu.Item name='create' position='right'>
        <Button as={Link} to='/create' primary basic icon>
          <Icon name='add'></Icon> Create
        </Button>
      </Menu.Item>
      <Menu.Item name='logout'>
        <Button color='red' basic icon>
          <Icon name='log out'></Icon> Logout
        </Button>
      </Menu.Item>
    </Menu>
  )
}

export default Header
