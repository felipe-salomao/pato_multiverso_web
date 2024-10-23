import useFetch from 'hooks/useFetch'

import * as service from 'service'

import { NaveTable } from './components'

const NaveMain = () => {
  const { response } = useFetch(service.patoMultiverso.nave.list, {})

  const naves = response?.data?.naves

  return <NaveTable />
}

export default NaveMain
