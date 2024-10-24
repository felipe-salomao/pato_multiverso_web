import React, { useState } from 'react'
import { Box, Typography, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'
import patoImg from 'images/pato.png'
import binoculosImg from 'images/binoculos.jpg'

import quackSound from 'sounds/quack.mp3'
import xenofagoSound from 'sounds/xenofago.mp3'

import { AlertDialog } from 'components'
import constants from 'constants/index'
import useStyles from './styles'

const Pato = () => {
  const classes = useStyles()

  const [isGlassesOn, setIsGlassesOn] = useState(false)
  const [selectedPato, setSelectedPato] = useState(null)
  const [armaSelecionada, setArmaSelecionada] = useState('')
  const [tentativasRestantes, setTentativasRestantes] = useState({})
  const [patosCapturados, setPatosCapturados] = useState([])
  const [openAlert, setOpenAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const toggleGlasses = () => {
    setIsGlassesOn(!isGlassesOn)
    if (selectedPato) {
      setSelectedPato(null)
    }
  }

  const handleCloseAlert = () => {
    setOpenAlert(false)
  }

  const handlePatoClick = (pato) => {
    let audio

    if (pato.tipo === 'Xenófago') {
      audio = new Audio(xenofagoSound)
    } else {
      audio = new Audio(quackSound)
    }

    audio.volume = 0.1
    audio.play()

    setSelectedPato(pato)
  }

  const handleCaptura = (pato) => {
    if (pato.tipo === 'Xenófago') {
      if (armaSelecionada === pato.arma) {
        const novasTentativas = { ...tentativasRestantes }

        novasTentativas[pato.id] = (novasTentativas[pato.id] || pato.tentativas) - 1

        if (novasTentativas[pato.id] > 0) {
          setTentativasRestantes(novasTentativas)

          setAlertMessage(`Você precisa tentar mais ${novasTentativas[pato.id]} vez(es) para capturar esse pato.`)
          setOpenAlert(true)
        } else {
          setAlertMessage(
            patosCapturados.length < 2 ? 'Você capturou o pato!' : 'Parabéns! Você capturou todos os patos!'
          )

          setOpenAlert(true)
          setSelectedPato(null)
          setPatosCapturados([...patosCapturados, pato.id])
        }
      } else {
        setAlertMessage('Você está usando a arma errada para capturar esse pato!')
        setOpenAlert(true)
      }
    }
  }

  const patos = constants.pato.PATOS_GERAL

  return (
    <Box className={classes.root}>
      <Box className={classes.overlay} />
      {patos.map(
        (pato) =>
          !patosCapturados.includes(pato.id) && (
            <Box
              key={pato.id}
              className={classes.pato}
              style={{ top: pato.top, left: pato.left }}
              onClick={() => handlePatoClick(pato)}
            >
              <img
                src={patoImg}
                alt="Pato"
                className={classes.patoImg}
                style={{
                  filter: isGlassesOn && pato.tipo === 'Xenófago' ? 'hue-rotate(100deg) saturate(200%)' : 'none',
                }} // aplica a cor verde nos patos xenofago
              />
            </Box>
          )
      )}

      <Box display="flex" flexDirection="column" alignItems="end" marginTop={2}>
        <Button
          variant="contained"
          color={isGlassesOn ? 'secondary' : 'primary'}
          onClick={toggleGlasses}
          className={classes.binoculosBotao}
        >
          {isGlassesOn ? 'Remover Óculos' : 'Colocar Óculos'}
        </Button>

        <FormControl variant="outlined" className={classes.armaSelect}>
          <InputLabel id="select-arma-label" style={{ color: 'white' }}>
            Selecione uma arma
          </InputLabel>
          <Select
            labelId="select-arma-label"
            value={armaSelecionada}
            onChange={(e) => setArmaSelecionada(e.target.value)}
            label="Selecione uma arma"
            style={{ color: 'white' }}
          >
            <MenuItem value="" disabled>
              Selecione uma arma
            </MenuItem>
            <MenuItem value="Pokeduck">Pokeduck</MenuItem>
            <MenuItem value="Pega-Pato Turbo 3000">Pega-Pato Turbo 3000</MenuItem>
            <MenuItem value="Cata-Pato Espacial Supersônico">Cata-Pato Espacial Supersônico</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {isGlassesOn && <img src={binoculosImg} alt="Visão de Binóculos" className={classes.binoculosImg} />}

      {selectedPato && isGlassesOn && (
        <Box className={classes.info}>
          <Typography className={classes.binoculosTexto}>Pato: {selectedPato.tipo}</Typography>
          {selectedPato.tipo === 'Xenófago' && (
            <>
              <Typography className={classes.binoculosTexto}>Como capturar: {selectedPato.captura}</Typography>
              <Typography className={classes.binoculosTexto}>Arma recomendada: {selectedPato.arma}</Typography>
              <Button onClick={() => handleCaptura(selectedPato)} variant="contained" color="primary">
                Tentar Capturar
              </Button>
            </>
          )}
        </Box>
      )}

      <AlertDialog open={openAlert} handleClose={handleCloseAlert} title="Alerta" message={alertMessage} />
    </Box>
  )
}

export default Pato
