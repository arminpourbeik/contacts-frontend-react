import {
  CONTACTS_LOADING,
  CONTACTS_LOADING_ERROR,
  CONTACTS_LOADING_SUCCESS,
  USER_LOGOUT,
} from '../../constants/actionTypes'

import contactsInitialState from '../initialStates/contactInitials'

function contactReducer(state, action) {
  switch (action.type) {
    case CONTACTS_LOADING:
      return { ...state, contacts: { ...state.contacts, loading: true } }
    case CONTACTS_LOADING_SUCCESS:
      return {
        ...state,
        contacts: { ...state.contacts, loading: false, data: action.payload },
      }
    case CONTACTS_LOADING_ERROR:
      return {
        ...state,
        contacts: { ...state.contacts, loading: false, error: action.payload },
      }
    case USER_LOGOUT:
      return {
        ...state,
        contactsInitialState,
      }
    default:
      return state
  }
}

export default contactReducer
