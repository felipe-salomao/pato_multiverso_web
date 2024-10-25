import { Box } from '@material-ui/core'

import { NaveTable } from './components'

import useFetch from 'hooks/useFetch'
import * as service from 'service'
import useStyles from './styles'

const NaveMain = () => {
  const classes = useStyles()

  const { response, isLoading } = useFetch(service.patoMultiverso.nave.list, {})

  const naves = response?.data?.naves

  return (
    <Box className={classes.root}>
      <Box className={classes.overlay} />
      <Box className={classes.formContainer}>
        <NaveTable naves={naves} isLoading={isLoading} />
      </Box>
    </Box>
  )
}

export default NaveMain
