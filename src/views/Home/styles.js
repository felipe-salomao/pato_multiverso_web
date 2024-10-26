import { makeStyles } from '@material-ui/core'

import naveImg from 'images/nave_paisagem.png'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    backgroundImage: `url(${naveImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  patoImg: {
    marginTop: 50,
    marginLeft: 1000,
  },
  dialogContainer: {
    position: 'relative',
    maxWidth: 700,
    padding: '1em',
    right: 1100,
    bottom: 150,
  },
  dialog: {
    width: 500,
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  dialogTriangle: {
    position: 'absolute',
    top: '50%',
    right: '-15px',
    width: 0,
    height: 0,
    borderLeft: '15px solid #f1f1f1',
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    transform: 'translateY(-50%)',
  },
})

export default useStyles
