import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  formControl: {
    textColor: 'white',
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
  textField: {
    '& .MuiOutlinedInput-root': {
      color: 'white', // Cor do texto
      backgroundColor: 'transparent', // Background transparente para Número de tripulantes
      '& fieldset': {
        borderColor: 'white', // Borda branca
      },
      '&:hover fieldset': {
        borderColor: 'white', // Borda branca ao passar o mouse
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white', // Borda branca em foco
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white', // Cor do label
    },
    '& .MuiFormHelperText-root': {
      color: 'white', // Cor do texto do helperText
    },
  },
  typography: {
    marginBottom: 50,
    color: 'white',
    textAlign: 'center',
  },
}))

export default useStyles
