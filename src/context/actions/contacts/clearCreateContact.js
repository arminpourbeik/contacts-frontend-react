import { CLEAR_ADD_CONTACT } from '../../../constants/actionTypes'

function clearCreateContact() {
  return function (dispatch) {
    dispatch({ type: CLEAR_ADD_CONTACT })
  }
}

export default clearCreateContact
