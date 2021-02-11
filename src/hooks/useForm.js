import { useState } from 'react'

export default function useForm(initialValue) {
  const [form, setForm] = useState(initialValue)

  function changeForm(e, { name, value }) {
    setForm({ ...form, [name]: value })
  }

  return [form, changeForm]
}
