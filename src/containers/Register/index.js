import { useEffect } from 'react'
import { Link } from 'react-router-dom'

/* Register function */
import { register } from '../../context/actions/register'

function Register() {
  useEffect(() => {
    register({
      username: 'arminpourbeik',
      password: 'armin159753147',
      first_name: 'armin',
      last_name: 'pourbeik',
    })

    /* Cleanup function */
    return () => {}
  }, [])

  return (
    <h1>
      Hello from Register component <Link to='/login'>login</Link>{' '}
    </h1>
  )
}

export default Register
