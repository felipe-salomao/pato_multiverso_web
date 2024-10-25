import { Box, Typography, Button, Paper } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

import patolinoImg from 'images/patolino_estiloso.png'
import useStyles from './styles'

const Home = () => {
  const navigate = useNavigate()
  const classes = useStyles()

  const handleNew = () => {
    navigate('/naves/new')
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" className={classes.root}>
      <img src={patolinoImg} alt="Pato" className={classes.patoImg} />
      <Box className={classes.dialogContainer}>
        <Paper className={classes.dialog}>
          <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
            Bem-vindo, bravo herói!
          </Typography>
          <Typography variant="body1" paragraph>
            Uma nave alienígena foi detectada caindo na Terra, trazendo consigo mistérios e tecnologias jamais vistas!
            Sua missão é investigar cada detalhe, registrar tudo o que puder, e enfrentar qualquer desafio que esses
            visitantes possam oferecer. Seja um arsenal de armas extraterrestres, ou criaturas ameaçadoras, você é a
            linha de frente!
          </Typography>
          <Typography variant="body1" paragraph>
            Explore cada pista, reúna informações e esteja pronto para usar suas habilidades para manter nosso planeta
            seguro! O destino da humanidade está em suas mãos.
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold', marginBottom: '1em' }}>
            Boa sorte! Estamos contando com você.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleNew}>
            Iniciar Missão
          </Button>
        </Paper>
        <Box className={classes.dialogTriangle} />
      </Box>
    </Box>
  )
}

export default Home
