import React, { useState } from 'react'
import { isEmpty } from 'lodash'

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
import useStyles from './styles'

const NaveForm = () => {
  const classes = useStyles()

  const [currentPotential, setCurrentPotential] = useState('')
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
      alert(error?.response?.data?.errors)
    }
  }

  const fields = constants.nave.NAVE_FIELDS

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom className={classes.typography}>
        Registre a Nave
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Potencial de prospecção tecnológica"
              fullWidth
              className={classes.textField}
              value={currentPotential}
              required={isEmpty(formData.potencial)}
              onChange={(e) => setCurrentPotential(e.target.value)}
              onKeyDown={handlePotentialKeyDown}
              helperText="Digite o potencial e pressione ENTER para adicionar."
              variant="outlined"
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
              variant="outlined"
              className={classes.textField}
            />
          </Grid>

          {fields.map((field) => (
            <Grid item xs={6} key={field.id}>
              <FormControl variant="outlined" fullWidth className={classes.formControl}>
                <InputLabel id={`${field.id}-label`} style={{ color: 'white' }}>
                  {field.name}
                </InputLabel>
                <Select
                  labelId={`${field.id}-label`}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  label={field.name}
                  style={{ color: 'white', textTransform: 'uppercase' }}
                  required={field.required}
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
