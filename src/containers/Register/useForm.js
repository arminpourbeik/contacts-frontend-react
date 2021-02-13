import { useState, useContext, useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import { register } from '../../context/actions/auth/register'
import { GlobalContext } from '../../context/Provider'

function useForm(initialValue) {
  const [form, setForm] = useState(initialValue)
  const [fieldErrors, setFieldErrors] = useState({})

  const history = useHistory()

  const {
    authState: {
      auth: { loading, data, error },
    },
    authDispatch,
  } = useContext(GlobalContext)

  useEffect(() => {
    if (error) {
      for (let item in error) {
        setFieldErrors({ ...fieldErrors, [item]: error[item][0] })
      }
    }
  }, [error])

  useEffect(() => {
    if (data) history.push('/login')
  }, [data])

  function changeForm(e, { name, value }) {
    setForm({ ...form, [name]: value })
  }

  const registerFormValid =
    !form.username?.length ||
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.password?.length ||
    !form.email?.length

  function onSubmit() {
    setFieldErrors({})
    register(form)(authDispatch)
  }

  return [form, changeForm, registerFormValid, onSubmit, loading, fieldErrors]
}

export default useForm
