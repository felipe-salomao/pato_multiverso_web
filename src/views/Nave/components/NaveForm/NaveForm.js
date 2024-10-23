import React, { useState } from 'react'
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  Container,
  Chip,
} from '@material-ui/core'

import * as service from 'service'
import constants from 'constants/index'

const NaveForm = () => {
  const [formData, setFormData] = useState({
    potencial: [],
    tamanho: '',
    cor: '',
    local: '',
    armamentos: '',
    combustivel: '',
    tripulantes: '',
    saudeTripulantes: '',
    grauAvaria: '',
    periculosidade: '',
  })

  const [currentPotential, setCurrentPotential] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handlePotentialKeyDown = (e) => {
    if (e.key === 'Enter' && currentPotential.trim()) {
      setFormData({
        ...formData,
        potencial: [...formData.potencial, currentPotential.trim()],
      })
      setCurrentPotential('') // Limpa o campo de entrada
      e.preventDefault() // Previne o comportamento padrão de enviar o formulário
    }
  }

  const handleDeleteChip = (chipToDelete) => {
    setFormData({
      ...formData,
      potencial: formData.potencial.filter((chip) => chip !== chipToDelete),
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await service.patoMultiverso.nave.create({ ...formData })

      window.location.reload()
      alert('Formulário enviado com sucesso!')
    } catch (error) {
      alert('Erro ao enviar o formulário!')
    }
  }

  const fields = constants.nave.NAVE_FIELDS

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Formulário da Nave
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Potencial de prospecção tecnológica"
              fullWidth
              required
              value={currentPotential}
              onChange={(e) => setCurrentPotential(e.target.value)}
              onKeyDown={handlePotentialKeyDown}
              helperText="Digite o potencial e pressione Enter para adicionar."
            />
            <div>
              {formData.potencial.map((potencial, index) => (
                <Chip
                  key={index}
                  label={potencial}
                  onDelete={() => handleDeleteChip(potencial)}
                  style={{ margin: '5px' }}
                />
              ))}
            </div>
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Número de tripulantes"
              name="tripulantes"
              fullWidth
              type="number"
              inputProps={{ min: 0, step: 1 }}
              value={formData.tripulantes}
              onChange={handleChange}
            />
          </Grid>

          {fields.map((field) => (
            <Grid item xs={6} key={field.id}>
              <FormControl fullWidth>
                <InputLabel id={`${field.id}-label`}>{field.name}</InputLabel>
                <Select
                  labelId={`${field.id}-label`}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                >
                  {field.values.map((item) => (
                    <MenuItem key={item.value} value={item.value} style={{ textTransform: 'uppercase' }}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default NaveForm
