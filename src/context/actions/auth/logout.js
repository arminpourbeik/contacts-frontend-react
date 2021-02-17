import { USER_LOGOUT } from '../../../constants/actionTypes'

function logout(history) {
  localStorage.removeItem('access')
  history.push('/login')

  return function (dispatch) {
    dispatch({ type: USER_LOGOUT })
  }
}

export default logout
