import {
  CONTACTS_LOADING,
  CONTACTS_LOADING_ERROR,
  CONTACTS_LOADING_SUCCESS,
} from '../../constants/actionTypes'

export default function contactReducer(state, action) {
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
    default:
      return state
  }
}
