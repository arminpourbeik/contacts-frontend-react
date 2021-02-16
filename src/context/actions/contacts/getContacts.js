import axiosInstance from '../../../helpers/axiosInstance'

import {
  CONTACTS_LOADING,
  CONTACTS_LOADING_ERROR,
  CONTACTS_LOADING_SUCCESS,
} from '../../../constants/actionTypes'

function getContacts(history) {
  return async function (dispatch) {
    dispatch({ type: CONTACTS_LOADING })

    try {
      const res = await axiosInstance(history).get('/contacts/')
      dispatch({ type: CONTACTS_LOADING_SUCCESS, payload: res.data })
    } catch (err) {
      dispatch({
        type: CONTACTS_LOADING_ERROR,
        payload: err.response ? err.response.data : 'COULD NOT CONNECT',
      })
    }
  }
}

export default getContacts
