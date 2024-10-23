import PerfectScrollbar from 'react-perfect-scrollbar'
import { StyledTable } from './StyledTable'

const Table = ({ children, ...rest }) => {
  return (
    <PerfectScrollbar>
      <StyledTable {...rest}>{children}</StyledTable>
    </PerfectScrollbar>
  )
}

export default Table
