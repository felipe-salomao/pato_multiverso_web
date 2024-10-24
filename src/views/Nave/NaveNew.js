import { Box } from '@material-ui/core'

import { NaveForm } from './components'

import useStyles from './styles'

const NaveNew = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.overlay} />
      <Box className={classes.formContainer}>
        <NaveForm />
      </Box>
    </Box>
  )
}

export default NaveNew
