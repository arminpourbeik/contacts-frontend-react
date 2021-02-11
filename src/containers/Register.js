import { useEffect } from 'react'

/* Register function */
import { register } from '../context/actions/register'

// Custom hook (form)
import useForm from '../hooks/useForm'

import { RegisterUI } from '../pages'

function Register() {
  useEffect(() => {
    /* Cleanup function */
    return () => {}
  }, [])

  return <RegisterUI form={useForm} />
}

export default Register
