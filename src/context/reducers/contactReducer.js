import {
  CLEAR_ADD_CONTACT,
  CONTACTS_LOADING,
  CONTACTS_LOADING_ERROR,
  CONTACTS_LOADING_SUCCESS,
  CREATE_CONTACT_ERROR,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
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

    case CREATE_CONTACT_LOADING:
      return {
        ...state,
        addContact: { ...state.addContact, loading: true, error: null },
      }

    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          data: action.payload,
        },
        contacts: {
          ...state.contacts,
          loading: false,
          data: [action.payload, ...state.contacts.data],
        },
      }

    case CREATE_CONTACT_ERROR:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          error: action.payload,
        },
      }

    case CLEAR_ADD_CONTACT:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          data: null,
        },
      }
    default:
      return state
  }
}

export default contactReducer
