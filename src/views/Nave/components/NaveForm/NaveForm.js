import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

import { AlertDialog } from 'components'

import * as service from 'service'
import constants from 'constants/index'
import useStyles from './styles'

const NaveForm = () => {
  const navigate = useNavigate()
  const classes = useStyles()

  const [openAlert, setOpenAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
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
      const response = await service.patoMultiverso.nave.create({ ...formData })

      setAlertMessage('Nave registrada com sucesso!')
      setOpenAlert(true)

      setTimeout(() => {
        navigate(`/naves/show/${response.data.id}`)
      }, 2000)
    } catch (error) {
      setAlertMessage(error?.response?.data?.errors)
      setOpenAlert(true)
    }
  }

  const handleList = () => {
    navigate('/naves')
  }

  const fields = constants.nave.NAVE_FIELDS

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom className={classes.typography}>
        REGISTRE AS INFORMAÇÕES SOBRE A NAVE
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
              helperText="Digite os potenciais tecnológicos e pressione ENTER para adicionar."
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
              Registrar
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="success" onClick={handleList} fullWidth>
              Listagem das naves
            </Button>
          </Grid>
        </Grid>
      </form>

      <AlertDialog open={openAlert} title="Sucesso" message={alertMessage} form />
    </Container>
  )
}

export default NaveForm
