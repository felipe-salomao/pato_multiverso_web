import axios from 'axios'
import humps from 'humps'
import qs from 'qs'
import { getBaseURL } from './env'

export const create = (projectTag) => {
  let api = axios.create({ baseURL: getBaseURL(projectTag) })

  api.interceptors.request.use((reqConfig) => {
    reqConfig.headers.crossDomain = true
    reqConfig.data = humps.decamelizeKeys(reqConfig.data)
    reqConfig.params = humps.decamelizeKeys(reqConfig.params)

    reqConfig.paramsSerializer = (params) => {
      return qs.stringify(params, {
        arrayFormat: 'brackets',
        encode: false,
      })
    }

    return reqConfig
  })

  api.interceptors.response.use(
    (resp) => humps.camelizeKeys(resp),
    (error) => {
      return Promise.reject(humps.camelizeKeys(error))
    }
  )

  return api
}

export default { create }
