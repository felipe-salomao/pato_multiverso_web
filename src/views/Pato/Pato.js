import React, { useState } from 'react'

import { Box, Container, Typography } from '@material-ui/core'

import patoImg from 'images/pato.png'
import binoculosImg from 'images/binoculos.jpg'

import useStyles from './styles'

const Pato = () => {
  const classes = useStyles()
  const [isGlassesOn, setIsGlassesOn] = useState(false)
  const [selectedPato, setSelectedPato] = useState(null)

  const toggleGlasses = () => {
    setIsGlassesOn(!isGlassesOn)
  }

  const patos = [
    { id: 1, name: 'Pato 1', top: '10%', left: '20%' },
    { id: 2, name: 'Pato 2', top: '30%', left: '50%' },
    // Mais patos...
  ]

  const handlePatoClick = (pato) => {
    if (isGlassesOn) {
      setSelectedPato(pato)
    }
  }

  return (
    <Box className={classes.root}>
      {patos.map((pato) => (
        <Box
          key={pato.id}
          className={classes.pato}
          style={{ top: pato.top, left: pato.left }}
          onClick={() => handlePatoClick(pato)}
        >
          <img src={patoImg} alt="Pato" />
        </Box>
      ))}

      <button className={classes.glassesButton} onClick={toggleGlasses}>
        {isGlassesOn ? 'Remover Óculos' : 'Colocar Óculos'}
      </button>

      {isGlassesOn && <img src={binoculosImg} alt="Visão de Binóculos" className={classes.binocularImage} />}

      {selectedPato && (
        <Box className={classes.info}>
          <h2>{selectedPato.name}</h2>
          {/* Outras informações do pato */}
        </Box>
      )}
    </Box>
  )
}

export default Pato
