import React, { useState } from 'react'

import {
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
} from '@material-ui/core'

import VisibilityIcon from '@material-ui/icons/Visibility'

import useStyles from './styles'

const createData = (name, type, size, status) => {
  return { name, type, size, status }
}

const rows = [
  createData('Nave Explorer X', 'Exploração', 'Grande', 'Ativa'),
  createData('Nave Interstellar Z', 'Comércio', 'Média', 'Inativa'),
  createData('Nave Galactic Cruiser', 'Militar', 'Colossal', 'Em manutenção'),
  createData('Nave Orion Beta', 'Pesquisa', 'Pequena', 'Ativa'),
  createData('Nave Falcon Alpha', 'Transporte', 'Grande', 'Inativa'),
  createData('Nave Stellar Voyager', 'Exploração', 'Colossal', 'Ativa'),
  createData('Nave Cosmic Runner', 'Transporte', 'Média', 'Em manutenção'),
]

const NaveTable = () => {
  const classes = useStyles()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Tabela de Naves Alienígenas">
        <TableHead>
          <TableRow>
            <TableCell>Nome da Nave</TableCell>
            <TableCell align="center">Tipo</TableCell>
            <TableCell align="center">Tamanho</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.size}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">
                <div className={classes.actions}>
                  <Tooltip title="Visualizar">
                    <IconButton color="primary" aria-label="show">
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Linhas por página"
      />
    </TableContainer>
  )
}

export default NaveTable
