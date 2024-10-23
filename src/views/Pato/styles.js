import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 80,
    marginTop: 55,
    textAlign: 'center',
  },
  pato: {
    position: 'absolute',
    animation: '$move 10s linear infinite',
    top: 0,
  },
  info: {
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
    border: '1px solid black',
  },
  binocularImage: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    pointerEvents: 'none',
    zIndex: 10,
    mixBlendMode: 'multiply',
    opacity: 0.7,
  },
  '@keyframes move': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(100vw)',
    },
  },
}))

export default useStyles
