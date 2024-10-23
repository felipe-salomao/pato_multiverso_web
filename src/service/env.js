export const getBaseURL = (project) => envsBaseUrl[project][env]

const env = 'development'

const envsBaseUrl = {
  patoMultiverso: {
    development: 'http://localhost:3001/',
  },
}
