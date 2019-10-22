import { red } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'

export const withRedButtonStyles = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(red[400]),
    backgroundColor: red[400],
    '&:hover': {
      backgroundColor: red[600]
    }
  }
}))
