import { makeStyles } from '@material-ui/core/styles'

import naveImg from 'images/nave_paisagem.png'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    backgroundImage: `url(${naveImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  pato: {
    position: 'absolute',
    animation: '$move 5s ease-in-out infinite alternate',
    top: 0,
  },
  patoImg: {
    width: 150,
  },
  '@keyframes move': {
    '0%': {
      transform: 'translateX(calc(0vw - 200px))',
    },
    '100%': {
      transform: 'translateX(calc(100vw - 1500px))',
    },
  },
  binoculosBotao: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    zIndex: 11,
    marginBottom: '16px',
    marginTop: 15,
    marginRight: 20,
  },
  binoculosImg: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    pointerEvents: 'none',
    zIndex: 10,
    mixBlendMode: 'multiply',
    opacity: 0.9,
  },
  binoculosTexto: {
    color: 'green',
    marginBottom: 3,
  },
  info: {
    position: 'fixed',
    top: '72%',
    left: '19%',
    padding: 50,
    zIndex: 12,
  },
  armaSelect: {
    minWidth: 200,
    position: 'relative',
    marginTop: 70,
    marginRight: 30,
    zIndex: 11,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white', // Cor da borda
      },
      '&:hover fieldset': {
        borderColor: 'white', // Cor da borda ao passar o mouse
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white', // Cor da borda quando em foco
      },
      '& .MuiSelect-icon': {
        color: 'white', // Cor do ícone do Select
      },
    },
  },
}))

export default useStyles
