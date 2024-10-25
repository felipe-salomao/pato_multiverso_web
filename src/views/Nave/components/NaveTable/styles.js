import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 1500,
    marginLeft: 200,
  },
  table: {
    minWidth: 650,
    '& thead th': {
      backgroundColor: '#3f51b5',
      color: '#fff',
      fontWeight: 'bold',
    },
    '& tbody tr:nth-of-type(odd)': {
      backgroundColor: '#f2f2f2',
    },
    '& tbody tr:hover': {
      backgroundColor: '#e0f7fa',
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
  },
})

export default useStyles
