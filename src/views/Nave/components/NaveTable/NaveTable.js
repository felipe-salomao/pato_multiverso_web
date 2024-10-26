import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  TablePagination,
  Typography,
} from '@material-ui/core'

import VisibilityIcon from '@material-ui/icons/Visibility'

import useStyles from './styles'

const NaveTable = ({ naves, isLoading }) => {
  const navigate = useNavigate()
  const classes = useStyles()

  const [page, setPage] = useState(0)
  const [navesPerPage, setNavesPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeNavesPerPage = (event) => {
    setNavesPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handlePagina = (rota, naveId) => {
    if (rota === 'show') {
      navigate(`/naves/show/${naveId}`)
    } else if (rota === 'new') {
      navigate('/naves/new')
    } else {
      navigate('/pato')
    }
  }

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={6}>
        <Button variant="contained" color="primary" fullWidth onClick={() => handlePagina('new')}>
          Registrar outra nave
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" color="secondary" fullWidth onClick={() => handlePagina('pato')}>
          Caçar os patos
        </Button>
      </Grid>
      <Grid item xs={12}>
        {!isLoading && naves && naves.length > 0 ? (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Tabela de Naves Alienígenas">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Classificação</TableCell>
                  <TableCell align="center">Tamanho</TableCell>
                  <TableCell align="center">Local</TableCell>
                  <TableCell align="center">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {naves.slice(page * navesPerPage, page * navesPerPage + navesPerPage).map((nave, index) => (
                  <TableRow key={index}>
                    <TableCell>{nave.id}</TableCell>
                    <TableCell align="center">{nave.classificacao}</TableCell>
                    <TableCell align="center">{nave.tamanho}</TableCell>
                    <TableCell align="center">{nave.local}</TableCell>
                    <TableCell align="center">
                      <Box className={classes.actions}>
                        <Tooltip title="Visualizar">
                          <IconButton color="primary" aria-label="show" onClick={() => handlePagina('show', nave.id)}>
                            <VisibilityIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={naves.length}
              rowsPerPage={navesPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeNavesPerPage}
              labelRowsPerPage="Linhas por página"
            />
          </TableContainer>
        ) : (
          <Typography variant="h2" className={classes.boxText}>
            Você ainda não registrou nenhuma nave
          </Typography>
        )}
      </Grid>
    </Grid>
  )
}

export default NaveTable
