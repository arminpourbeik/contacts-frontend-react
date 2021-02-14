import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Header } from '../components'
import getContacts from '../context/actions/contacts/getContacts'

function Contacts() {
  const history = useHistory()

  useEffect(() => {
    getContacts(history)
  }, [])

  return (
    <>
      <Header />
      <h1>Hello from contacts component</h1>
    </>
  )
}

export default Contacts
