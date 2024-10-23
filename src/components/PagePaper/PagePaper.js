import { Box, Paper } from '@material-ui/core'

const PagePaper = ({ children, ...rest }) => {
  return (
    <Box mt={6} maxWidth="100%">
      <Paper variant="outlined" {...rest} style={{ backgroundColor: '#1a1717' }}>
        <Box paddingX={2} paddingY={1}>
          {children}
        </Box>
      </Paper>
    </Box>
  )
}

export default PagePaper
