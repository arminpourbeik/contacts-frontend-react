import { useContext } from 'react'
import { Header } from '../../components'

import { GlobalContext } from '../../context/Provider'

function Contacts() {
  console.log(useContext(GlobalContext))

  return (
    <>
      <Header />
      <h1>Hello from contacts component</h1>
    </>
  )
}

export default Contacts
