import { Link } from 'react-router-dom'

function Login() {
  return (
    <h1>
      Hello from login component <Link to='/register'>Register</Link>
    </h1>
  )
}

export default Login
