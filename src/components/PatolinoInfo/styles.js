import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  dialogContainer: {
    position: 'relative',
    maxWidth: 700,
    padding: '1em',
    right: 1150,
    bottom: 140,
  },
  dialog: {
    width: 600,
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
  patoImg: {
    marginTop: 50,
    marginLeft: 1200,
    zIndex: 1,
  },
})

export default useStyles
