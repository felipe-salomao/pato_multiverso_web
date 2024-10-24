import { makeStyles } from '@material-ui/core'

import naveImg from 'images/patos_naves.jpeg'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    backgroundImage: `url(${naveImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  formContainer: {
    position: 'relative',
    marginTop: 80,
    zIndex: 3,
  },
})

export default useStyles