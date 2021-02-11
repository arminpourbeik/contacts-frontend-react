import axiosInstance from '../../helpers/axios'

function register({ username, password, first_name, last_name }) {
  axiosInstance
    .post('/auth/register/', { username, password, first_name, last_name })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err, err.message))
}

export { register }
