import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axiosInstance'

function register({
  email,
  password,
  username,
  firstName: first_name,
  lastName: last_name,
}) {
  return async function (dispatch) {
    dispatch({ type: REGISTER_LOADING })

    try {
      const res = await axiosInstance().post('/auth/register/', {
        email,
        password,
        username,
        first_name,
        last_name,
      })
      dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    } catch (err) {
      dispatch({
        type: REGISTER_ERROR,
        payload: err.response.data ? err.response.data : 'Error occurred',
      })
    }
  }
}

export { register }
