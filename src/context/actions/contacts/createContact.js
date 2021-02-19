import {
  CREATE_CONTACT_ERROR,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axiosInstance'

function createContact(formData) {
  const {
    firstName: first_name,
    lastName: last_name,
    phoneNumber: phone_number,
    country: country_code,
    isFavorite,
  } = formData
  return function (dispatch) {
    dispatch({ type: CREATE_CONTACT_LOADING })

    // Send data to server
    axiosInstance()
      .post('/contacts/', {
        first_name,
        last_name,
        phone_number,
        country_code,
        isFavorite,
      })
      .then((res) => {
        dispatch({ type: CREATE_CONTACT_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({
          type: CREATE_CONTACT_ERROR,
          payload: err.response ? err.response.data : 'COULD_NOT_CONNECT',
        })
      })
  }
}

export default createContact
