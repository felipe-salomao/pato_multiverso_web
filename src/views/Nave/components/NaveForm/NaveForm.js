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
} from '@material-ui/core'

import * as service from 'service'
import constants from 'constants/index'

const NaveForm = () => {
  const [formData, setFormData] = useState({
    potencial: '',
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
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
              name="potencial"
              fullWidth
              required
              value={formData.potencial}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Número de tripulantes"
              name="tripulantes"
              fullWidth
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
