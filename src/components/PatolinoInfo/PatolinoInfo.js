import { Box, Typography, Button, Paper } from '@material-ui/core'

import patolinoImg from 'images/patolino_estiloso.png'

import useStyles from './styles'

const PatolinoInfo = ({ isDialogOpen, setIsDialogOpen }) => {
  const classes = useStyles()

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
  }

  return (
    <>
      {isDialogOpen && (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <img src={patolinoImg} alt="Pato" className={classes.patoImg} />
          <Box className={classes.dialogContainer}>
            <Paper className={classes.dialog}>
              <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
                Chegou a hora herói! Preparado para a missão?
              </Typography>
              <Typography variant="body1" paragraph>
                Uma vez que as expedições até as naves começaram, tivemos finalmente um contato imediato de terceiro
                grau, revelando a natureza dos corpos alienígenas. Para a surpresa e espanto de todos, descobrimos que
                eles eram idênticos a patos! Mais especificamente à espécie Anas platyrhynchos. Um pensamento
                amedrontador agora permeia a mente de todos: quantos deles escaparam e já estão se camuflando nos lagos,
                parques e quintais pelo mundo afora? Até o momento, sabemos que, embora sejam assustadoramente parecidos
                com nossos queridos patos terrestres, esses “Patos Galácticos” têm algumas peculiaridades: uma leve
                coloração esverdeada, bicos um pouco menores, e um “sotaque” alienígena bem distinto nos seus grasnados.
                Além disso, esses intrusos podem ficar dias sem se alimentar.
              </Typography>
              <Typography variant="body1" paragraph>
                Aproveitando a tecnologia recuperada das naves alienígenas, nosso time de cientistas desenvolveu óculos
                especiais capazes de escanear patos! Utilize ele para te ajudar a capturar os patos.
              </Typography>
              <Typography variant="body1" style={{ fontWeight: 'bold', marginBottom: '1em' }}>
                Boa sorte! Estamos contando com você.
              </Typography>
              <Button variant="contained" color="primary" onClick={handleCloseDialog}>
                Iniciar Missão
              </Button>
            </Paper>
            <Box className={classes.dialogTriangle} />
          </Box>
        </Box>
      )}
    </>
  )
}

export default PatolinoInfo
