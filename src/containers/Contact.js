import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Header } from '../components'
import getContacts from '../context/actions/contacts/getContacts'

import { GlobalContext } from '../context/Provider'

import { ContactList } from '../pages'

function Contacts() {
  // Global context
  const { contactState, contactDispatch } = useContext(GlobalContext)

  // History object - React Router DOM
  const history = useHistory()

  useEffect(() => {
    getContacts(history)(contactDispatch)
  }, [])

  return <ContactList contacts={contactState.contacts} />
}

export default Contacts
