import { useState, useContext, useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import { login } from '../../context/actions/auth/login'
import { GlobalContext } from '../../context/Provider'

export default function useForm(initialValue) {
  const [form, setForm] = useState(initialValue)

  const history = useHistory()

  const {
    authState: {
      auth: { loading, data, error },
    },
    authDispatch,
  } = useContext(GlobalContext)

  function changeForm(e, { name, value }) {
    setForm({ ...form, [name]: value })
  }

  const loginFormValid = !form.username?.length || !form.password?.length

  function onSubmit() {
    login(form)(authDispatch)
  }

  useEffect(() => {
    if (data?.access) history.push('/')
  }, [data])

  return [form, changeForm, loginFormValid, onSubmit, loading, error]
}
