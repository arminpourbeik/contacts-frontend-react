import { LoginUI } from '../../pages'
import useForm from './useForm'

function Login() {
  return <LoginUI form={useForm} />
}

export default Login
