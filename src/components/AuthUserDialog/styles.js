import { green } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'

export const withGreenButtonStyles = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(green[700]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[400]
    }
  }
}))
