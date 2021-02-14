import axiosInstance from '../../../helpers/axiosInstance'

function getContacts(history) {
  axiosInstance(history)
    .get('/contacts/')
    .then((res) => console.log('res.data', res.data))
    .catch((e) => console.log('e', e.response))
}

export default getContacts
