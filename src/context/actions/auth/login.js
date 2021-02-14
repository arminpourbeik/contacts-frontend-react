import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axios'

function login({ password, username }) {
  return async function (dispatch) {
    dispatch({ type: LOGIN_LOADING })

    try {
      const res = await axiosInstance.post('/auth/login/', {
        password,
        username,
      })
      localStorage.access = res.data.access
      localStorage.refresh = res.data.refresh
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    } catch (err) {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response.data ? err.response.data : 'Error occurred',
      })
    }
  }
}

export { login }
