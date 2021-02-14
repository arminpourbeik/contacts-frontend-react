import axios from 'axios'

const axiosInstance = (history = null) => {
  const baseURL = process.env.REACT_APP_BACKEND_URL

  let headers = {}

  if (localStorage.access) {
    headers.Authorization = `Bearer ${localStorage.access}`
  }

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
  })

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response)
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error)
        })
      }

      if (error.response.status === 403 || error.response.status === 401) {
        localStorage.removeItem('access')

        if (history) {
          history.push('/login')
        } else {
          window.location = '/login'
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error)
        })
      }
    }
  )

  return axiosInstance
}

export default axiosInstance
