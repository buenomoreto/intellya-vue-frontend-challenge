import axios, { AxiosInstance, AxiosResponse } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    Accept: 'application/json'
  }
})

api.interceptors.request.use(
  (config) => {
    config.headers['x-api-key'] = '70335667-2408-4011-a994-ea3e7042d96f'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  async (error) => {
    if (error.response) {
      console.error('Erro de resposta do servidor:', error.response.status)
    } else if (error.request) {
      console.error('Erro de solicitação:', error.request)
    } else {
      console.error('Erro ao processar solicitação:', error.message)
    }
    return Promise.reject(error)
  }
)

export { api }
