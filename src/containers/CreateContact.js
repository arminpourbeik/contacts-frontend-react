import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { CreateContact } from '../pages'
import createContact from '../context/actions/contacts/createContact'
import { GlobalContext } from '../context/Provider'
import clearCreateContact from '../context/actions/contacts/clearCreateContact'

function CreateContactContainer() {
  const { contactState, contactDispatch } = useContext(GlobalContext)
  const history = useHistory()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    country: '',
    isFavorite: false,
  })

  const {
    addContact: { loading, data },
  } = contactState

  function onChange(e, { name, value }) {
    setForm({ ...form, [name]: value })
  }

  const formIsNotValid =
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.country?.length ||
    !form.phoneNumber?.length

  function onSubmit() {
    createContact(form)(contactDispatch)
  }

  useEffect(() => {
    if (data) history.push('/')

    return () => {
      clearCreateContact()(contactDispatch)
    }
  }, [data])

  return (
    <CreateContact
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      formIsNotValid={formIsNotValid}
    />
  )
}

export default CreateContactContainer
