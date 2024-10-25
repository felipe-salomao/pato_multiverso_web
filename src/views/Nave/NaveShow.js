import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Box, Button, Typography, Paper, Tooltip, IconButton } from '@material-ui/core'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

import { AlertDialog } from 'components'
import useFetch from 'hooks/useFetch'
import * as service from 'service'
import constants from 'constants/index'
import useStyles from './styles'

const NaveShow = () => {
  const { naveId } = useParams()
  const navigate = useNavigate()
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const { response, isLoading } = useFetch(service.patoMultiverso.nave.show, { naveId })

  const nave = response?.data?.nave

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handlePagina = (rota) => {
    if (rota === 'all') {
      navigate('/naves')
    } else {
      navigate('/pato')
    }
  }

  return (
    <Box className={classes.root} display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box className={classes.overlay} />
      {isLoading ? (
        <Box>Carregando</Box>
      ) : (
        <Box className={classes.boxContainer}>
          <Paper elevation={3} className={classes.paper}>
            <Box display="flex" alignItems="center">
              <Typography variant="h5" gutterBottom style={{ flexGrow: 1 }}>
                Classificação da Nave
              </Typography>
              <Tooltip title="Como é feita a classificação?">
                <IconButton onClick={handleOpen}>
                  <HelpOutlineIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="body1" paragraph>
              A sua nave foi classificada como{' '}
              <span style={{ fontWeight: 'bold', color: '#3f51b5' }}>{nave?.classificacao}</span>.
            </Typography>
            <Typography variant="body2" paragraph>
              Essa classificação reflete a análise das características e potenciais da sua nave, levando em conta
              aspectos como tecnologia, local da queda, quantidade de tripulantes, tipo de combustível, tamanho da nave,
              armamentos e grau de periculosidade. Uma nave classificada como{' '}
              <span style={{ fontWeight: 'bold' }}>{nave?.classificacao}</span> pode ser altamente valorizada em
              diferentes cenários e traz consigo uma série de implicações estratégicas.
            </Typography>
            <Typography variant="body2">
              Continue explorando as possibilidades que essa nave oferece e descubra como ela pode ser uma peça-chave
              nas suas próximas missões!
            </Typography>
          </Paper>
          <Box display="flex" justifyContent="space-between" marginTop={2}>
            <Button variant="contained" color="success" fullWidth onClick={() => handlePagina('all')}>
              Listagem das naves
            </Button>
            <Button variant="contained" color="secondary" fullWidth onClick={() => handlePagina('pato')}>
              Caçar os patos
            </Button>
          </Box>
        </Box>
      )}

      <AlertDialog
        open={open}
        handleClose={handleClose}
        title="Classificação das naves"
        message={constants.nave.CLASSIFICACAO_INFO}
      />
    </Box>
  )
}

export default NaveShow
