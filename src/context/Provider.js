import { createContext, useReducer } from 'react'

import authReducer from './reducers/authReducer'
import contactReducer from './reducers/contactReducer'
import authInitials from './initialStates/authInitials'
import contactInitials from './initialStates/contactInitials'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, authInitials)
  const [contactState, contactDispatch] = useReducer(
    contactReducer,
    contactInitials
  )

  return (
    <GlobalContext.Provider
      value={{ authState, authDispatch, contactState, contactDispatch }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
