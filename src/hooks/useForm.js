import { useState } from 'react'

export default function useForm(initialValue) {
  const [form, setForm] = useState(initialValue)

  function changeForm(e, { name, value }) {
    setForm({ ...form, [name]: value })
  }

  const registerFormValid =
    !form.username?.length ||
    !form.first_name?.length ||
    !form.last_name?.length ||
    !form.password?.length ||
    !form.email?.length

  return [form, changeForm, registerFormValid]
}
