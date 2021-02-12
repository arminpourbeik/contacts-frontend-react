import { useEffect } from 'react'
import { register } from '../context/actions/register'
import useForm from '../hooks/useForm'
import { RegisterUI } from '../pages'

export default function Register() {
  useEffect(() => {
    /* Cleanup function */
    return () => {}
  }, [])

  return <RegisterUI form={useForm} />
}
