import useFetch from 'hooks/useFetch'

import * as service from 'service'

import { NaveForm } from './components'

const Nave = () => {
  const { response } = useFetch(service.patoMultiverso.nave.list, {})

  const naves = response?.data?.naves

  return <NaveForm />
}

export default Nave
