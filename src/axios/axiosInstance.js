import axios from 'axios'
import { BASE_URL } from 'constants/ConstantDeclaration'

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = BASE_URL
axiosInstance.defaults.headers = {
  'Content-Type': 'application/json'
}

export default axiosInstance
