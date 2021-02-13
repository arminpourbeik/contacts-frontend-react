import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../constants/actionTypes'

export default function authReducer(state, action) {
  switch (action.type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING:
      return { ...state, auth: { ...state.auth, loading: true } }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: false,
          data: action.payload,
        },
      }
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: action.payload,
        },
      }
    default:
      return state
  }
}
