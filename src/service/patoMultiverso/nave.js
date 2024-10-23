import api from 'service/api'

const nave = api.create('patoMultiverso')

const list = async () => {
  return await nave.get('naves')
}

const create = async ({ ...params }) => {
  return await nave.post('naves', { ...params })
}

export default { list, create }
