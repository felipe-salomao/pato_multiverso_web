import { TableRow as TableRowMUI } from '@material-ui/core'

const TableRow = ({ onClick, children }) => {
  return (
    <TableRowMUI hover onClick={onClick}>
      {children}
    </TableRowMUI>
  )
}

TableRow.defaultProps = {
  onClick: () => {},
}

export default TableRow
